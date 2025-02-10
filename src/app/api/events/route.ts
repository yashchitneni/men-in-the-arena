import { NextResponse } from 'next/server'
import type { Event } from '@/types'

interface AirtableRecord {
  id: string
  fields: {
    Name: string
    Date: string
    Time: string
    'Leader Name': string
    Location: string
  }
}

export async function GET() {
  try {
    // Log environment variables (safely)
    const envCheck = {
      hasApiKey: !!process.env.AIRTABLE_API_KEY,
      hasBaseId: !!process.env.AIRTABLE_BASE_ID,
      hasTableId: !!process.env.AIRTABLE_WORKOUTS_TABLE_ID,
      apiKeyLength: process.env.AIRTABLE_API_KEY?.length || 0,
      baseIdLength: process.env.AIRTABLE_BASE_ID?.length || 0,
      tableIdLength: process.env.AIRTABLE_WORKOUTS_TABLE_ID?.length || 0
    }
    console.log('Environment check:', envCheck)

    // Validate environment variables
    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID || !process.env.AIRTABLE_WORKOUTS_TABLE_ID) {
      throw new Error(`Missing required environment variables: ${JSON.stringify(envCheck)}`)
    }

    const today = new Date().toISOString().split('T')[0]
    console.log('Fetching records after:', today)

    const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_WORKOUTS_TABLE_ID}`
    const params = new URLSearchParams({
      filterByFormula: `AND(NOT({Date} = ''), IS_AFTER({Date}, '${today}'))`,
      sort: JSON.stringify([{ field: "Date", direction: "asc" }]),
      maxRecords: "10"
    })

    console.log('Fetching from URL:', `${url}?${params}`)
    
    const response = await fetch(`${url}?${params}`, {
      headers: {
        'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Airtable API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      })
      throw new Error(`Airtable API error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    console.log('Records fetched:', data.records?.length)

    const events: Event[] = data.records.map((record: AirtableRecord) => {
      try {
        const eventData = {
          id: record.id,
          title: record.fields.Name,
          date: record.fields.Date,
          time: record.fields.Time,
          leader: record.fields['Leader Name'],
          location: record.fields.Location,
        }
        console.log('Processed event:', eventData)
        return eventData
      } catch (recordError) {
        console.error('Error processing record:', record.id, recordError)
        throw new Error(`Failed to process record ${record.id}`)
      }
    })

    return NextResponse.json(events)
  } catch (error) {
    // Detailed error logging
    console.error('Detailed error in /api/events:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      type: error instanceof Error ? error.constructor.name : typeof error
    })
    
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch events' }, 
      { status: 500 }
    )
  }
} 