import { sql } from '@vercel/postgres'
import { unstable_noStore as noStore } from 'next/cache';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from './ui/button';

import { Trash2 } from 'lucide-react';

const BookingTable = async () => {
  noStore();

  const { rows } = await sql`SELECT * FROM Bookings`;

  return (
    <section>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone number</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.email}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.date.toLocaleDateString()}</TableCell>
              <TableCell>{row.time}</TableCell>

              <TableCell>
                <Button 
                  variant={"outline"}
                >
                  <Trash2 size={15} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  )
}

export default BookingTable