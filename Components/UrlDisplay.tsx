import { UrlType } from "@/types/type";
import Link from "next/link";

async function getURLS() {
    try {
        const res = await fetch("http://localhost:4000/api/short", {
            next: { revalidate: 100 }
        });

        const links = await res.json();
        return links;
    } catch (error) {
        console.log(error)
    }
}

export default async function UrlDisplay() {

    const response = await getURLS();
    const { urls } = response;

    return (
        <div className="flex items-center justify-center">

            <table className="w-full border h-auto mb-2">
                <thead>
                    <tr className="border hover:bg-slate-100">
                        <th className="border">Rank</th>
                        <th className="border">Domain</th>
                        <th className="border">Clicks</th>
                        <th className="border">Title</th>
                    </tr >

                </thead>

                <tbody>
                    {urls.map((url: UrlType, index: number) => (
                        <tr className="text-center hover:bg-slate-100" key={url.id}>
                            <td className="border">{index + 1}</td>
                            <td className="border text-secondary hover:underline">
                                <Link href={url.full_url}>
                                    {url.full_url}
                                </Link>
                            </td>
                            <td className="text-blue-800 border">{url.click_count}</td>
                            <td className="border">{url.id === 1 ? (
                                <p>Google</p>
                            ) : url.title == "Cursor - Tailwind CSS" || url.title == "Billing FAQ | BeenVerified" || url.title == "URL Shortener" ? (
                                <p>{url.title}</p>
                            ) : url.title === null ? (
                                <p>Youtube</p>
                            ) : (
                                <div>{url.title?.replace(":", "").split(" ", 1) || 'Not Available'}</div>
                            )}</td>
                        </tr>
                    ))}

                </tbody>

            </table>

        </div>

    );
}