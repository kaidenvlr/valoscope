"use client"

import copyToClipboard from "@/utils/copyClipboard";
import {Card} from "antd";
import Meta from "antd/es/card/Meta";
import React, {useEffect} from "react";
import generateCrosshair from "@/lib/fetchCrosshair";
import Image from "next/image";

type CrosshairCardProps = {
    code: string;
}

function CrosshairCard(props: CrosshairCardProps) {
    const {code} = props;

    const [image, setImage] = React.useState<Base64URLString>("data:image/png;base64,");
    const [loading, setLoading] = React.useState<boolean>(true);

    const fetchImage = (code: string) => {
        try {
            setLoading(true);
            generateCrosshair({code: code}).then(r => {
                setImage(r);
                setLoading(false);
            });
        } catch (e) {
            console.error(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchImage(code);
    }, [code, image])

    return (
        <Card
            loading={loading}
            hoverable
            style={{width: 240}}
            cover={<Image alt={code} src={image} width={200} height={200}/>}
            onClick={() => copyToClipboard({value: code})}
        >
            <Meta title="Crosshair" description="Crosshair Description"/>
        </Card>
    )
}

export default CrosshairCard;