import React from "react";
import image from '../../assets/summer-plants-flyer.png'
export default function Header() {
    return (
        <div className="container mx-auto py-8 flex flex-col items-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Welcome to Plant Lovers!</h1>
            <div className="flex flex-col md:flex-row md:justify-around md:items-center md:w-3/4">
                <p className="text-lg md:w-1/2 md:text-2xl">
                    Plant Lovers is a community-driven website that brings together people
                    passionate about plants. Whether you are a seasoned gardener or just
                    getting started with houseplants, this is the place to be. Share your
                    knowledge, learn from others, and discover new plant species that match
                    your preferences. Join us and let's explore the wonderful world of
                    plants together!
                </p>
                <img src={image} alt="" />
            </div>
        </div>

    )
}