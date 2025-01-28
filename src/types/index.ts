export interface Testimonial {
  quote: string
  author: string
  role: string
  avatar: string
}

export interface Activity {
  icon: React.ComponentType
  title: string
  description: string
  date: string
}

export interface FAQ {
  question: string
  answer: string
} 