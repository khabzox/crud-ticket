"use client";
import { Ticket } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TicketForm({ ticket }) {
  const EDITMODE = ticket._id === "new" ? false : true;
  console.log(EDITMODE);
  const router = useRouter();

  const handChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDITMODE) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Failed to Update Ticket.");
      }
    } else {
      const res = await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Failed to create Ticket.");
      }
    }

    // router.refresh();
    router.push("/");
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  if (EDITMODE) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["status"] = ticket.status;
    startingTicketData["category"] = ticket.category;
  }

  const [formData, setFormData] = useState(startingTicketData);
  return (
    <>
      <div className="flex justify-center">
        <form
          className="flex flex-col gap-3 w-1/2"
          method="post"
          onSubmit={handleSubmit}
        >
          <h3>{EDITMODE ? "Upfate your Ticket" : "Creat Your Ticket"}</h3>
          <label>Title: </label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={handChange}
            required={true}
            value={formData.title}
          />
          <label>Description: </label>
          <textarea
            id="description"
            name="description"
            onChange={handChange}
            required={true}
            value={formData.description}
            rows="5"
          />
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handChange}
          >
            <option value="Hardware Problem">Hardware Problem</option>
            <option value="Software Problem">Software Problem</option>
            <option value="Project">Project</option>
          </select>

          <label>priority</label>
          <div>
            <input
              type="radio"
              name="priority"
              id="priority-1"
              onChange={handChange}
              value={1}
              checked={formData.priority == 1}
            />
            <label>1</label>
            <input
              type="radio"
              name="priority"
              id="priority-2"
              onChange={handChange}
              value={2}
              checked={formData.priority == 2}
            />
            <label>3</label>
            <input
              type="radio"
              name="priority"
              id="priority-3"
              onChange={handChange}
              value={3}
              checked={formData.priority == 3}
            />
            <label>3</label>
            <input
              type="radio"
              name="priority"
              id="priority-4"
              onChange={handChange}
              value={4}
              checked={formData.priority == 4}
            />
            <label>4</label>
            <input
              type="radio"
              name="priority"
              id="priority-5"
              onChange={handChange}
              value={5}
              checked={formData.priority == 5}
            />
            <label>5</label>
          </div>
          <label>Progress</label>
          <input
            type="range"
            id="progress"
            name="progress"
            value={formData.progress}
            min="0"
            max="100"
            onChange={handChange}
          />
          <label>Status</label>
          <select name="status" value={formData.status} onChange={handChange}>
            <option value="not started">Not Sarted</option>
            <option value="started">Sarted</option>
            <option value="done">Done</option>
          </select>
          <input
            type="submit"
            className="btn"
            value={EDITMODE ? "Upfate your Ticket" : "Creat Your Ticket"}
          />
        </form>
      </div>
    </>
  );
}
