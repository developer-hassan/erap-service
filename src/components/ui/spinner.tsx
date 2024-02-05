export default function Spinner() {
  return (
    <div className="fixed flex flex-col items-center justify-center top-0 left-0 w-full h-screen z-10">
      <img src={"/single-logo.jpg"} className={"w-10 h-auto"} alt={"Logo"} />
      <div className="animate-rotate rounded-full h-5 w-5 border-[3px] border-[#096aac] border-b-transparent bg-white m-2" />
    </div>
  );
}
