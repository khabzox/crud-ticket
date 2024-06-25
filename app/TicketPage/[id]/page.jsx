import TicketForm from "@/components/TickietForm";
async function getTicketById(id) {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to get ticket.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function TecketPage({ params }) {
  const EDITMODE = params.id === "new" ? false : true;
  let updateTicketData = {};

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
    // console.log(updateTicketData);
  } else {
    updateTicketData = {
      _id: "new",
    };
  }
  // console.log(EDITMODE, updateTicketData)
  return <TicketForm ticket={updateTicketData} />;
}
