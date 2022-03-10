import { useState, useEffect } from "react";
import { Match } from "../types/types";

interface Iaction {
	type: string;
	payload: string | Number | Array<string> | Object;
}
