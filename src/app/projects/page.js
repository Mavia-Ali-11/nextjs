import { revalidateTag } from 'next/cache'
import { Rubik_Dirt } from 'next/font/google'

const rubik = Rubik_Dirt({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const generateMetadata = () => {
  return {
    title: "Projects - Next JS",
    description: "Working on projects here."
  }
}

const getProjects = async () => {
  let result = await fetch("https://jsonplaceholder.typicode.com/photos", { next: { tags: ['images'] }, cache: "no-store" });
  result = await result.json();
  revalidateTag("images")
  return result;
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <>
      <h1 className={rubik.className}>Hello Projects ({projects.length})</h1>
      <div className="projects">
        {
          projects?.map((p) => {
            return (
              <div key={p.id}>
                <h6>{p.id}</h6>
                <h4>{p.title}</h4>
                <img src={p.thumbnailUrl} />
              </div>
            )
          })
        }
      </div>
    </>
  )
}
