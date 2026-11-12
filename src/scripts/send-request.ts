// Envoi des demandes (réservation, devis).
// 1. Si PUBLIC_FORM_ENDPOINT est défini : POST du formulaire (Formspree, Web3Forms,
//    Cloudflare Pages Function…), puis redirection vers /merci.
// 2. Sinon : ouverture de WhatsApp avec le message pré-rempli adressé à l'hôtel.

export function wireRequestForm(form: HTMLFormElement, buildMessage: (data: FormData) => string) {
  const endpoint = form.dataset.endpoint;
  const whatsapp = form.dataset.whatsapp!;
  const error = form.querySelector<HTMLElement>('[data-error]');
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (error) error.hidden = true;
    const data = new FormData(form);

    if (String(data.get('site_web') ?? '').trim() !== '') {
      location.href = '/merci';
      return;
    }
    data.delete('site_web');

    if (!endpoint) {
      const text = encodeURIComponent(buildMessage(data));
      window.open(`https://wa.me/${whatsapp}?text=${text}`, '_blank', 'noopener');
      return;
    }

    if (button) { button.disabled = true; button.dataset.label = button.textContent ?? ''; button.textContent = 'Envoi en cours…'; }
    try {
      const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(String(res.status));
      location.href = '/merci';
    } catch {
      if (error) {
        error.textContent = 'La demande n’a pas été envoyée. Vérifiez votre connexion et réessayez, ou écrivez-nous sur WhatsApp.';
        error.hidden = false;
      }
      if (button) { button.disabled = false; button.textContent = button.dataset.label ?? 'Envoyer'; }
    }
  });
}
