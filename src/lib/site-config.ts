// ⚙️ Configurações centrais do site INOVA DRONE.
// Altere o número de WhatsApp, contatos e redes sociais aqui.

export const WHATSAPP_NUMBER = '5594992489276'; // formato internacional, sem “+”

export const CONTACT = {
	phoneDisplay: '(94) 99248-9276',
	email: 'inovadronefinanceiro@gmail.com',
	cnpj: '62.353.921/0001-95',
	address: 'Casa de Tábua - Pará',
	instagram: 'https://instagram.com/inova_drone',
	facebook: 'https://www.facebook.com/profile.php?id=61593394942550',
};

export function whatsappLink(message: string, number: string = WHATSAPP_NUMBER): string {
	return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
