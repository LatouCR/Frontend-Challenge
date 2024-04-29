import Shortner from "@/Components/Shortner";
import Link from "next/link";

export default async function Home() {


  return (
    <main className="flex flex-col items-center">
      <section className="container w-screen h-screen flex justify-center items-center flex-col">
        <div className="flex flex-col items-center justify-center">
          <h1 className="sm:text-6xl lg:text-8xl font-medium text-title text-shadow-sm shadow-black/20">
            Create Short URLS
          </h1>

          <p className="lg:text-base sm:text-sm py-2">The World's Shortest Link Shortener service to track, brand, and share short URLs.</p>
        </div>

        <div className="flex w-full">
          <Shortner />
        </div>

        <div className="flex gap-6 mt">
          <h2 className="lg:text-base sm:text-sm">URL shortener allows to create a shortened link making it easy to share.</h2>
          <span>
            <a href="/top" className="text-blue-800 hover:underline">
              Top 100 URLS
            </a>
          </span>
        </div>
      </section>

      <section className="w-screen h-full flex sm:flex-col lg:flex-row">

        <div className="flex bg-decor lg:w-1/2 sm:w-screen h-auto p-8 justify-center items-center gap-6">
          <div className="flex flex-col px-4">
            <h1 className="lg:text-3xl sm:text-xl max-w-lg mb-2 font-medium text-secondary ">
              Simple and fast URL shortener!
            </h1>
            <p className="text-base text max-w-lg">Free URL Shortener for transforming long, ugly links into nice, memorable and trackable short URLs. Use it to shorten links for any  social media platforms, blogs, SMS, emails, ads, or pretty much anywhere  else you want to share them. Twitter, Facebook, YouTube, Instagram, WhatsApp, emails, SMS, videos. After shorterning the URL, check how many clicks it received.</p>
          </div>
          <div>
            <img src="/image.png" alt="Shorten Urls" />
          </div>
        </div>

        <div className="flex bg-primary lg:w-1/2 sm:w-screen h-auto p-8 justify-center items-center gap-6">
          <div className="flex px-8">
            <svg fill="#000000" height="300px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 419.668 419.668">
              <path d="M383.488,105.815c11.525-25.28,23.318-50.44,35.136-75.583c3.569-7.595-2.421-18.398-11.774-15.315
	              c-30.372,10.01-60.866,18.437-92.339,24.244c-4.893,0.903-8.46,7.328-6.789,11.955c3.559,9.843,15.121,13.119,27.238,13.968
	              c-9.719,9.509-19.21,19.192-28.809,28.092c-20.461,18.971-43.889,37.258-61.314,59.462c-21.548-13.993-49.311-26.742-75.326-29.579
	              c-3.342-1.7-7.171-2.056-10.807-0.346c-2.22,0.617-4.058,2.202-5.263,4.199c-25.501,29.281-51.619,58.02-78.548,86
              	c-10.917,11.346-27.768,23.907-40.306,38.035c0.084-43.166-0.859-86.223-5.901-128.343c-1.311-10.961-19.506-16.294-21.501-2.91
	              c-13.061,87.619-4.83,181.324-2.266,269.601C5.24,400.249,15.179,404.693,23.453,403c120.428,6.463,242.839-2.963,363.607-1.389
	              c19.015,0.247,19.026-29.296,0-29.538c-5.941-0.075-12.001-0.197-17.966-0.284c-1.707-92.856-3.334-186.074-7.364-278.896
	              c1.486,3.532,3.023,7.067,4.444,10.659C368.803,110.196,379.736,114.043,383.488,105.815z M34.263,377.564
	              c-0.583-29.477-0.221-59.296,0.073-89.172c10.823-3.178,20.846-11.073,30.136-20.26c-3.889,35.146-1.126,71.581,0.129,106.627
	              C54.469,375.618,44.325,376.432,34.263,377.564z M73.23,373.962c-2.643-37.769,0.326-75.743-1.428-113.431
	              c8.702-9.511,16.694-19.471,23.852-26.861c8.148-8.411,16.068-17.032,24.055-25.589c-5.18,53.578-1.154,109.52,1.484,163.111
              	C105.156,371.878,89.151,372.727,73.23,373.962z M165.744,370.139c-10.964,0.199-21.95,0.239-32.884,0.629
                c-2.888-57.062-0.213-114.83-4.77-171.602c14.242-15.444,28.279-31.074,42.098-46.908
                C166.597,224.646,166.723,297.683,165.744,370.139z M232.516,369.781c-18.436-0.109-36.881-0.099-55.305,0.138
                c3.1-71.958,5.28-145.232,1.822-217.269c4.931,2.555,9.813,5.116,15.082,7.495c13.942,6.297,27.346,13.818,41.478,19.646
                C232.5,242.9,233.422,306.597,232.516,369.781z M290.505,370.565c-15.491-0.245-30.965-0.522-46.497-0.657
                c2.183-62.467,4.022-126.192-0.046-188.664c1.912-0.392,3.605-1.287,5.045-2.527c0.76-0.203,1.528-0.357,2.261-0.756
                c15.842-8.606,30.005-20.58,43.545-33.263C291.261,219.849,291.663,295.357,290.505,370.565z M302.147,370.729
                c-0.087-77.174,1.539-154.658-1.224-231.796c8.78-8.436,17.346-17.016,25.982-25.007c9.093-8.419,18.806-16.746,28.422-25.221
                c-2.14,94.161-1.737,188.686-1.444,282.844C336.653,371.275,319.491,371.02,302.147,370.729z"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <h1 className="lg:text-3xl sm:text-xl font-medium text-text max-w-lg mb-2">
              Easy Online Tracking Reports
            </h1>
            <p className="text-base text max-w-md">Track statistics for your business and projects by monitoring the number of hits from your URL with our click counter.</p>
            <div className="flex gap-4 justify-end">
              <Link href="/" className="w-32 h-11 bg-[#3C6E71] flex items-center justify-center">
                <p className="text-base font-semibold text-white">TRY SHORT</p>
              </Link>
              <Link href="/api/short" className="w-32 h-11 border border-secondary flex items-center justify-center">
                <p className="text-base font-semibold text-title">API ACCESS</p>
              </Link>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}