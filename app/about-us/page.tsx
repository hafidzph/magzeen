import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Newspaper, Users, Globe, Mail } from "lucide-react";

const anggotaTim = [
  {
    nama: "Hafidz Putra Herlyansyah",
    jabatan: "Front End Developer",
    gambar: "/placeholder.svg?height=300&width=300",
  },
];

export default function AboutUs() {
  return (
    <section className="container mx-auto px-28 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Tentang MagZeen</h1>

      {/* Pernyataan Misi */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Misi Kami</h2>
        <p className="text-lg text-muted-foreground">
          Di MagZeen, kami berkomitmen untuk menyampaikan berita yang akurat,
          tidak bias, dan tepat waktu kepada pembaca kami. Misi kami adalah
          untuk menginformasikan, mendidik, dan menginspirasi melalui jurnalisme
          berkualitas dan pengalaman digital yang mutakhir.
        </p>
      </section>

      {/* Fitur Utama */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Apa yang Membedakan Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Newspaper,
              judul: "Liputan Komprehensif",
              deskripsi: "Dari cerita lokal hingga peristiwa global",
            },
            {
              icon: Users,
              judul: "Tim Ahli",
              deskripsi: "Jurnalis berpengalaman dan pakar industri",
            },
            {
              icon: Globe,
              judul: "Perspektif Global",
              deskripsi: "Berita dari setiap penjuru dunia",
            },
            {
              icon: Mail,
              judul: "Keterlibatan Pembaca",
              deskripsi: "Fitur interaktif dan forum komunitas",
            },
          ].map((fitur, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center p-6">
                <fitur.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{fitur.judul}</h3>
                <p className="text-center text-muted-foreground">
                  {fitur.deskripsi}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Bagian Tim */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Tim Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {anggotaTim.map((anggota, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <Image
                    src={anggota.gambar}
                    alt={anggota.nama}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  {anggota.nama}
                </h3>
                <p className="text-center text-muted-foreground">
                  {anggota.jabatan}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Bagian Kontak */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Hubungi Kami</h2>
        <Card>
          <CardContent className="p-6">
            <p className="mb-4">
              Kami menghargai umpan balik Anda dan selalu siap membantu. Jangan
              ragu untuk menghubungi kami untuk pertanyaan, saran, atau peluang
              kolaborasi.
            </p>
            <Button>Hubungi Kami</Button>
          </CardContent>
        </Card>
      </section>
    </section>
  );
}
