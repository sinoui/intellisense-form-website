import { Buffer as NativeBuffer } from "buffer";
import process from "process";

globalThis.Buffer = NativeBuffer;
globalThis.process = process;
