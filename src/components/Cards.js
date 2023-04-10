import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import income from "../Image/income.webp";
import expense from "../Image/expense.svg";
import profit from "../Image/profit.webp";
import previous from "../Image/previous.png";

export default function Cards() {
  return (
    <>
      <Card className="flex items-center justify-between px-5 hover:shadow-lg ">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <div className="flex-col text-sm font-bold">
              <div>Income</div>
              <div>$ 3,000,000</div>
              <div className="text-green-400">$ 10,000,000</div>
            </div>
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="140"
          image={income}
          alt="green iguana"
          sx={{ width: "5rem" }}
        />
      </Card>
      <Card className="flex items-center justify-between px-5 hover:shadow-lg">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <div className="flex-col text-sm font-bold">
              <div>Expensse</div>
              <div className="text-red-400">$ 3,000,000</div>
              <div className="text-red-600">$ 10,000,000</div>
            </div>
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="140"
          image={expense}
          alt="green iguana"
          sx={{ width: "4rem" }}
        />
      </Card>
      <Card className="flex items-center justify-between px-5 hover:shadow-lg">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <div className="flex-col text-sm font-bold">
              <div>Expensse</div>
              <div className="text-blue-400">$ 3,000,000</div>
              <div className="text-blue-600">$ 10,000,000</div>
            </div>
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="140"
          image={profit}
          alt="green iguana"
          sx={{ width: "4rem" }}
        />
      </Card>
      <Card className="flex items-center justify-between px-5 hover:shadow-lg">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <div className="flex-col text-sm font-bold">
              <div>Expensse</div>
              <div className="text-green-400">$ 3,000,000</div>
              <div className="text-green-600">$ 10,000,000</div>
            </div>
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="140"
          image={previous}
          alt="green iguana"
          sx={{ width: "4rem" }}
        />
      </Card>
    </>
  );
}
