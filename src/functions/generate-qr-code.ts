import QRCode from 'qrcode';

export const generateQRCode = async (otpauthUrl: string) => {
  try {
    const qrCodeDataURL = await QRCode.toDataURL(otpauthUrl);
    return qrCodeDataURL;
  } catch (error) {
    console.error('Failed to generate QR code', error);
    throw new Error('QR code generation failed');
  }
};
