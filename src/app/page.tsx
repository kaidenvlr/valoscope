import CrosshairCard from "@/components/CrosshairCard/CrosshairCard";


export default function HomePage() {
    const code = "0;s;1;P;c;5;u;000000FF;h;0;d;1;f;0;0t;6;0l;1;0v;1;0g;1;0o;0;0a;1;0m;1;0f;0;0s;0.02;1b;0;S;c;0;s;1.031;o;1";

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-6">
            <h1 className="text-4xl font-bold">Добро пожаловать в Next.js 13+</h1>
            <CrosshairCard
                code={code}
            />
        </main>
    );
}
