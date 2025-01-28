import { NextResponse } from 'next/server'
import Airtable from 'airtable'

// Field IDs
const FIELD_IDS = {
  workouts: {
    name: 'fldz35f3gr7fu8v02',
    date: 'fldFwtJrG7QlXmQa0',
    leaderName: 'fld1WMLhYGSVzbNh8',
    location: 'fldTNx2QmRpCpUTCG'
  },
  contactInfo: {
    firstName: 'fldwyV10pgy7dfrmx',
    lastName: 'fldhG5lREy3LbL8v2'
  }
}

// Validate environment variables
const validateEnvVariables = () => {
  const required = {
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
    AIRTABLE_WORKOUTS_TABLE_ID: process.env.AIRTABLE_WORKOUTS_TABLE_ID,
    AIRTABLE_CONTACTS_TABLE_ID: process.env.AIRTABLE_CONTACTS_TABLE_ID
  }

  const missing = Object.entries(required)
    .filter(([_, value]) => !value)
    .map(([key]) => key)

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`)
  }
}

// Initialize Airtable
const initializeAirtable = () => {
  try {
    return new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID!)
  } catch (error) {
    console.error('Error initializing Airtable:', error)
    throw new Error('Failed to initialize Airtable connection')
  }
}

export async function GET() {
  try {
    // Validate environment variables
    validateEnvVariables()

    // Initialize Airtable
    const base = initializeAirtable()

    console.log('Attempting to fetch records from table:', process.env.AIRTABLE_WORKOUTS_TABLE_ID)

    // Fetch upcoming events
    const records = await base(process.env.AIRTABLE_WORKOUTS_TABLE_ID!).select({
      maxRecords: 3,
      sort: [{ field: FIELD_IDS.workouts.date, direction: 'asc' }],
      filterByFormula: `IS_AFTER({${FIELD_IDS.workouts.date}}, TODAY())`,
      fields: [
        FIELD_IDS.workouts.name,
        FIELD_IDS.workouts.date,
        FIELD_IDS.workouts.leaderName,
        FIELD_IDS.workouts.location
      ]
    }).firstPage()

    console.log('Successfully fetched records:', records.length)

    const events = await Promise.all(records.map(async record => {
      // Get the linked leader record ID(s)
      const leaderIds = record.get(FIELD_IDS.workouts.leaderName) as string[]
      let leaderFullName = ''
      
      if (leaderIds && leaderIds.length > 0) {
        try {
          const leaderId = leaderIds[0] // Get the first leader if multiple are assigned
          console.log('Fetching leader info for ID:', leaderId)
          const leaderRecord = await base(process.env.AIRTABLE_CONTACTS_TABLE_ID!).find(leaderId)
          
          if (leaderRecord) {
            const firstName = leaderRecord.get(FIELD_IDS.contactInfo.firstName) as string
            const lastName = leaderRecord.get(FIELD_IDS.contactInfo.lastName) as string
            leaderFullName = `${firstName} ${lastName}`
            console.log('Found leader:', leaderFullName)
          }
        } catch (error) {
          console.error('Error fetching leader info:', error)
        }
      }

      // Format the date and time
      const dateStr = record.get(FIELD_IDS.workouts.date) as string
      const date = new Date(dateStr)
      const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
      })
      
      const time = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric'
      })

      return {
        id: record.id,
        title: record.get(FIELD_IDS.workouts.name) as string,
        imageUrl: '/images/workout-default.jpg',
        leader: leaderFullName || 'TBA',
        date: formattedDate,
        time: time,
        location: record.get(FIELD_IDS.workouts.location) as string
      }
    }))

    return NextResponse.json(events)
  } catch (error) {
    console.error('Error in API route:', error)
    
    // Determine the error type and return appropriate status
    let status = 500
    let message = 'Internal server error'
    
    if (error instanceof Error) {
      if (error.message.includes('NOT_AUTHORIZED')) {
        status = 403
        message = 'Invalid or expired API key'
      } else if (error.message.includes('Missing required environment')) {
        status = 500
        message = error.message
      } else if (error.message.includes('NOT_FOUND')) {
        status = 404
        message = 'Table or record not found'
      }
    }
    
    return NextResponse.json({ 
      error: message,
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status })
  }
} 