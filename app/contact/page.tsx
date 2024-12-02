import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export default function HalamanHubungiKami() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Hubungi Kami</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Kirim Pesan</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Nama
                </label>
                <Input id="name" placeholder="Masukkan nama Anda" />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Masukkan email Anda"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-1"
                >
                  Subjek
                </label>
                <Input id="subject" placeholder="Subjek pesan" />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Pesan
                </label>
                <Textarea
                  id="message"
                  placeholder="Tulis pesan Anda di sini"
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full">
                Kirim Pesan
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardContent className="flex items-center p-6">
              <Phone className="h-6 w-6 text-primary mr-4" />
              <div>
                <h3 className="font-semibold">Telepon</h3>
                <p className="text-muted-foreground">(021) 1234-5678</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <Mail className="h-6 w-6 text-primary mr-4" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">info@magzeen.id</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <MapPin className="h-6 w-6 text-primary mr-4" />
              <div>
                <h3 className="font-semibold">Alamat</h3>
                <p className="text-muted-foreground">
                  Jl. Berita Utama No. 123, Jakarta
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Jam Operasional</h3>
              <p className="text-muted-foreground">
                Senin - Jumat: 09:00 - 17:00
              </p>
              <p className="text-muted-foreground">Sabtu: 09:00 - 13:00</p>
              <p className="text-muted-foreground">Minggu: Tutup</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="mt-8">
        <CardContent className="p-0">
          <iframe
            width="100%"
            height="600"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jakarta+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps tracker sport</a>
          </iframe>
        </CardContent>
      </Card>
    </div>
  );
}
