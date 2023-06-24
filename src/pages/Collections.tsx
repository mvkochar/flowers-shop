import React from 'react'

const Collections = () => {
    return (
        <main>
            <section>
                <h2
                    style={{
                        marginTop: "80px",
                        fontWeight: 700,
                        fontSize: "40px",
                        lineHeight: "124.18%",
                        textAlign: "center",
                        textTransform: "uppercase",
                        color: "#665F5F"
                    }}
                >
                    Our collections
                </h2>
            </section>
            <section>
                <div className="flowers-collections-box d-f">
                    <div className="flowers-collections-item">Birthday</div>
                    <div className="flowers-collections-item">Wedding</div>
                    <div className="flowers-collections-item">Anniversary</div>
                    <div className="flowers-collections-item">New baby</div>
                    <div className="flowers-collections-item">Luxury</div>
                    <div className="flowers-collections-item">Graduation</div>
                    <div className="flowers-collections-item">New Year</div>
                    <div className="flowers-collections-item">Valentine's day</div>
                    <div className="flowers-collections-item">Sympathy</div>
                    <div className="flowers-collections-item">Love and romance</div>
                    <div className="flowers-collections-item">Thank you</div>
                    <div className="flowers-collections-item">Toys</div>
                </div>
            </section>
        </main>
    )
}

export default Collections