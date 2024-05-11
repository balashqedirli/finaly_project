import { db } from '../../../server/firebase';
import { doc, getDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  const { id } = req.query; 

  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  if (!id) {
    res.status(400).json({ error: 'Product ID is required' });
    return;
  }

  const productRef = doc(db, 'products', id);
  const productSnap = await getDoc(productRef);

  if (!productSnap.exists()) {
    res.status(404).json({ error: 'Product not found' });
    return;
  }

  res.status(200).json(productSnap.data());
}
