import { writingsTR } from '@/constants'
import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {

  const writings = writingsTR.map((item)=>({
    url:`https://serkanyalcinkaya.vercel.app${item.link}`,
    lastModified:new Date(),
    changeFrequency: "monthly",
    priority:0.6
  }))
  return [
    {
      url: 'https://serkanyalcinkaya.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://serkanyalcinkaya.vercel.app/wrintgs',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://serkanyalcinkaya.vercel.app/wrintgs/2024-yilinda-hangi-yazilim-dilini-ogrenmeliyim',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://serkanyalcinkaya.vercel.app/codes',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://serkanyalcinkaya.vercel.app/projects',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...writings.map(writing => ({
        ...writing,
        changeFrequency: writing.changeFrequency as "monthly" | "yearly" | "always" | "hourly" | "daily" | "weekly" | "never",
    }))
  ]
}