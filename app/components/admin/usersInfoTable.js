import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const userInfo = [
  {
    userName: "User1",
    userEmail: "User1@gmail.com",
    paymentMethod: "Credit Card",
  },
  {
    userName: "User2",
    userEmail: "User2@gmail.com",
    paymentMethod: "Bank Transfer",
  },
  {
    userName: "User3",
    userEmail: "User3@gmail.com",
    paymentMethod: "Credit Card",
  },
  {
    userName: "User4",
    userEmail: "User4@gmail.com",
    paymentMethod: "PayPal",
  },
  {
    userName: "User5",
    userEmail: "User5@gmail.com",
    paymentMethod: "Credit Card",
  },
];

function InfoTable() {
  return (
    <Table>
      <TableCaption>A list of users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">User Name</TableHead>
          <TableHead>User Email</TableHead>
          <TableHead>Method</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {userInfo.map((user, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{user.userName}</TableCell>
            <TableCell>{user.userEmail}</TableCell>
            <TableCell>{user.paymentMethod}</TableCell>
            <TableCell>
              <Button>Verify User</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
export default InfoTable;
