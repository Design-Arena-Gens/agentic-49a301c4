import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = String(formData.get('name') || '');
  const email = String(formData.get('email') || '');
  const message = String(formData.get('message') || '');

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
  }

  // In a real app, send to an email or CRM provider here.
  // For demo, we simply respond success.
  return NextResponse.redirect('/?submitted=1', { status: 302 });
}
