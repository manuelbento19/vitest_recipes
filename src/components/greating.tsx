
export function Greating({name}:{name?: string}) {
  return (
    <div>
        <h1>Hello, {name ?? "Stranger"}</h1>
    </div>
  )
}
