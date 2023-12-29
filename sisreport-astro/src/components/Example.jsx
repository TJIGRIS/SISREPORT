import { Toaster, toast } from 'sonner'

// ...
export function MyToast() {
  return (
    <div>
      <Toaster />
      <button onClick={() => toast('My first toast')}>
        Give me a toast
      </button>
    </div>
  )
}