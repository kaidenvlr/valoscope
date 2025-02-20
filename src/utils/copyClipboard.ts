interface ICopyToClipboard {
    value: string
}

async function copyToClipboard({ value }: ICopyToClipboard) {
    try {
        let copyValue = "";
        if (!navigator.clipboard) {
            throw new Error("Browser don't have support for native clipboard");
        }
        if (value) {
            copyValue = value;
        }
        await navigator.clipboard.writeText(copyValue);
    } catch (error) {
        console.error(error);
    }
}

export default copyToClipboard;