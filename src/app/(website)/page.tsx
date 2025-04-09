import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PLANS } from "@/constants/pages";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <main>
    <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-700">
<div className="p-10">
  <div className="text-white flex items-center justify-between">
    <h1 className="text-2xl font-bold px-2 shadow shadow-amber-300">Slide</h1>
    <Button className="relative w-20">
      <Link className="absolute flex items-center justify-center w-full h-full font-bold hover:opacity-80 transition ease-in-out" href="/dashboard">Login</Link>
    </Button>
  </div>
  <div className="flex flex-col items-center text-white mt-10 font-bold">
    <h2 className="text-4xl">Slide Automation Project</h2>
    <p className="text-yellow-200 text-lg mt-5">This is an instagram automation project</p>
  </div>
  <div className="relative mt-10 h-40 md:h-80 w-full">
    <Image
    alt="Community member"
    src="/Ig-creators.png"
    fill
    className="object-cover"
    />

  </div>

</div>
    </section>
    <section>
      <div className="p-5 mt-5">
<h3 className="text-3xl font-semibold text-center border border-none shadow-2xl shadow-zinc-600 py-2">Choose Your Plan</h3>
<div className="grid grid-cols-1 md:grid-cols-2 mt-5">
{PLANS.map((item)=>(
<Card key={item.name} className="flex flex-col justify-between">
<CardHeader>
  <CardTitle className="text-2xl font-semibold">{item.name}</CardTitle>
</CardHeader>
<CardContent>
  <p className="text-zinc-600 font-semibold">{item.description}</p>
  <div className="grid grid-cols-1 mt-5">
  {item.features.map((feature,index)=>(
    <ul key={index} className="flex items-center gap-4 mt-2">
      <span><CheckCircle size={20}/></span>
      <li>{feature}</li>
    </ul>
  ))

  }
  </div>
  <p className="mt-5 font-semibold text-lg">{item.price}</p>
</CardContent>
<CardFooter>
  <Button className="w-full">{item.cta}</Button>
</CardFooter>
</Card>
))

}
</div>
      </div>
    </section>
  </main>
  );
}
