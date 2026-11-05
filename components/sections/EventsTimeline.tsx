"use client";

import { Calendar, MapPin, Users, Globe, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { upcomingEvents } from "@/lib/data";

export default function EventsTimeline() {
  return (
    <section className="py-16 md:py-24 bg-[#0b0514] text-white border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[var(--color-border)]">
          <div>
            <span className="pro-badge mb-2">
              Action Calendar
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Upcoming field events & youth strikes.
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-xl mt-1">
              Join our active regional units on the ground in university hubs and delta coastlines.
            </p>
          </div>

          <Link
            href="/get-involved"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] hover:text-white transition-colors shrink-0"
          >
            <span>Register as a Volunteer</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Clean, perfectly aligned timeline cards (Responsive on all screen sizes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="pro-card-interactive p-4 sm:p-5 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-40 w-full rounded-lg overflow-hidden mb-4">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-xs text-[11px] font-semibold text-[var(--color-accent)] border border-white/10">
                    Step {event.step}
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 text-[11px] text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    <Calendar size={12} className="text-[var(--color-accent)]" />
                    <span>{event.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-[var(--color-text-subtle)] mb-1.5">
                  <MapPin size={12} className="text-[var(--color-accent)]" />
                  <span>{event.location}</span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {event.title}
                </h3>

                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-4">
                  {event.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--color-border)] grid grid-cols-3 gap-1 text-[11px]">
                <div>
                  <span className="text-[10px] text-[var(--color-text-subtle)] block uppercase">Target</span>
                  <span className="font-semibold text-white">{event.stats.attendees}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[var(--color-text-subtle)] block uppercase">Impact</span>
                  <span className="font-semibold text-[var(--color-accent)]">{event.stats.impact}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[var(--color-text-subtle)] block uppercase">Focus</span>
                  <span className="font-semibold text-white truncate block">{event.stats.focus}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}