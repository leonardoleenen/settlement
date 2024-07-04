"use client";

import {
  createContract,
  generateContractDraft,
} from "../../../actions/contract.action";
import { Button } from "../button";

export function Sandbox() {
  return (
    <div className="text-2xl font-bold">
      <Button
        onClick={async () => {
          await createContract("My Contract");
        }}
        variant={"outline"}
      >
        My Button
      </Button>

      <Button
        onClick={async () => {
          const result = await generateContractDraft();
          console.log(result);
        }}
      >
        Send message
      </Button>
    </div>
  );
}
