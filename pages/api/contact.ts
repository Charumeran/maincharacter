import type { NextApiRequest, NextApiResponse } from 'next';

type ContactFormData = {
  company: string;
  name: string;
  position?: string;
  email: string;
  phone?: string;
  service: string;
  budget?: string;
  timeline?: string;
  message: string;
};

type SuccessResponse = {
  success: true;
  message: string;
};

type ErrorResponse = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body: ContactFormData = req.body;

    // バリデーション
    const requiredFields: (keyof ContactFormData)[] = ['company', 'name', 'email', 'service', 'message'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return res.status(400).json({ error: `${field}は必須項目です` });
      }
    }

    // メールアドレスの検証
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return res.status(400).json({ error: '有効なメールアドレスを入力してください' });
    }

    // ここで実際にはメール送信やデータベース保存を行う
    // 今回はログ出力のみ
    console.log('Contact form submission:', {
      company: body.company,
      name: body.name,
      email: body.email,
      service: body.service,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    return res.status(200).json({
      success: true,
      message: 'お問い合わせありがとうございます。3営業日以内にご連絡いたします。',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'サーバーエラーが発生しました' });
  }
}
