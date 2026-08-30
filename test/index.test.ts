import { describe, expect, it } from "vitest";
import { test } from "../src/index.ts";

describe("id3box", () => {
  it("pass", () => {
    expect(test()).toBe("works!");
  });
});
