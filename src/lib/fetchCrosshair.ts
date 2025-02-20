type GenerateCrosshairProps = {
    code: string
}

async function generateCrosshair(settings: GenerateCrosshairProps) {
    try {
        const response = await fetch(`/api/crosshair?id=${settings.code}`, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`ERROR [generateCrosshair]: ${response.statusText}`);
        }

        const data = await response.json();
        return data.base64Image; // Возвращаем строку base64
    } catch (e) {
        console.error('ERROR [generateCrosshair]:', e);
    }

    return null;
}

export default generateCrosshair;