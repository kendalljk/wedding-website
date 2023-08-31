"use client";
import React from "react";
export default function ContactForm() {
    return (
        <section className="min-h-screen w-full flex justify-center">
            <div className="flex flex-col pt-20 w-1/2">
                <h1 className="mx-auto mb-5 text-4xl text-center">Time to celebrate!</h1>
                <form>
                    <label
                        htmlFor="email"
                        className="font-bold italic uppercase tracking-wider"
                    >
                        Name:{" "}
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="block border-2 w-full mb-5"
                    />
                    <div className="flex flex-col items-left mb-5">
                        <label className="font-bold italic uppercase tracking-wider">
                            Attending:
                        </label>
                        <div className="flex justify-start">
                            <input
                                id="attending"
                                type="radio"
                                name="attendance"
                                value="attending"
                                required
                            />
                            <p className="mx-5 italic">Accepts with pleasure</p>
                        </div>
                        <div className="flex justify-start">
                            <input
                                id="not_attending"
                                type="radio"
                                name="attendance"
                                value="not_attending"
                            />
                            <p className="mx-5 italic">Declines with regret</p>
                        </div>
                    </div>
                    <label
                        htmlFor="number"
                        className="font-bold italic uppercase tracking-wider"
                    >
                        Number Attending:
                    </label>
                    <select
                        id="number"
                        name="number"
                        className="block border-2 w-full mb-5"
                        required
                    >
                        <option value={0}></option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                    </select>
                    <label
                        htmlFor="song"
                        className="font-bold italic uppercase tracking-wider"
                    >
                        I promise to dance if you play...
                    </label>
                    <input
                        id="song"
                        name="song"
                        className="block border-2 w-full mb-5"
                    />
                    <label
                        htmlFor="telephone"
                        className="mt-5 font-bold italic uppercase tracking-wider"
                    >
                        Message:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Any dietary restrictions, special requests?"
                        className="block border-2 w-full mb-5"
                    />
                    <button type="submit" className="block border-2 mx-auto px-2">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
