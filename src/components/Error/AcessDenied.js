import Link from "next/link";

const AcessDenied = () => {
  return (
    <main className="text-center">
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">

        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="w-full">
              <h1 className="my-2 text-gray-800 font-bold text-2xl mb-12 dark:text-white">잘못된 접근입니다.</h1>
              <Link href={`/`} className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                홈페이지로 이동
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
        </div>
      </div>
    </main>
  )
}

export default AcessDenied;