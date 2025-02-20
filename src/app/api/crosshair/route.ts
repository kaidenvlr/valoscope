import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'Missing crosshair ID' }, { status: 400 });
    }

    try {
        const apiResponse = await fetch(`${process.env.VALORANT_API_HOST}/valorant/v1/crosshair/generate?id=${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `${process.env.VALORANT_API_KEY}`
            }
        });

        if (!apiResponse.ok) {
            return NextResponse.json({ error: `API error: ${apiResponse.statusText}` }, { status: apiResponse.status });
        }

        const buffer = await apiResponse.arrayBuffer();
        const base64Image = Buffer.from(buffer).toString('base64');

        return NextResponse.json({ base64Image: `data:image/png;base64,${base64Image}` });
    } catch (error) {
        console.error('API Proxy Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
