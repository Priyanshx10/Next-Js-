"use client";

import { TextArea, TextField, Button } from "@radix-ui/themes";
import React from "react";
import Link from "next/link";

const NewIssuePage = () => {
  return (
    <div className="max-w-lg space-y-3">
      <TextField.Root placeholder="Title">
        <TextField.Slot />
      </TextField.Root>
      <TextArea placeholder="Reply to comment…" />
      <Button>
        <Link href="">Submit New Issue</Link>
      </Button>
    </div>
  );
};

export default NewIssuePage;
