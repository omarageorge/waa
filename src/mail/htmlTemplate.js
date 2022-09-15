export default function messageTemplate(body) {
  const { name, email, message } = body;

  const subject = `Message from ${name}`;

  const html = `<div>
    <div style="margin-bottom: 0.5rem;">
      <span style="font-family: sans-serif; font-weight: bold; margin-right: 1.6rem;">Name:</span>
      <span>${name}</span>
    </div>

    <div style="margin-bottom: 0.5rem;">
      <span style="font-family: sans-serif; font-weight: bold; margin-right: 1.8rem;">Email:</span>
      <span>${email}</span>
    </div>

    <div>
      <p style="font-family: sans-serif; font-weight: bold; margin-bottom: 0.5rem">Message:</p>
      <p">${message}</p>
    </div>
  </div>`;

  return { subject, html };
}
