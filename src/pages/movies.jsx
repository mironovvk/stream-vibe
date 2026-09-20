import MoviesBanner from '@/sections/MoviesBanner'
import Collections from "@/sections/Collections/index.js"

export const metadata = {
  title: 'Movies & Shows',
}

export default () => {
  return (
    <>
      <MoviesBanner/>
      <Collections/>
    </>
  )
}
