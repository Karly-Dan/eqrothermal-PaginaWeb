import { firestoreDb as db } from '~/server/firebase'
import { collection, addDoc } from 'firebase/firestore'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const leadsRef = collection(db, 'leads')
  await addDoc(leadsRef, body)

  return { body }
})
