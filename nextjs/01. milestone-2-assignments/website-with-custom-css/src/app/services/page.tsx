import "../../styles/services-styles/styles.css";

function Services() {
    return (
        <div className="services-container">
            <h1>Our Services</h1>
            <ul className="services-list">
                <li className="service-item">
                    <h3>Haircut</h3>
                    <p>Get a stylish and trendy haircut tailored to your preference.</p>
                    <div className="price">2500 PKR</div>
                </li>
                <li className="service-item">
                    <h3>Facial</h3>
                    <p>Experience a rejuvenating facial to refresh your skin.</p>
                    <div className="price">500 PKR</div>
                </li>
                <li className="service-item">
                    <h3>Manicure &amp; Pedicure</h3>
                    <p>Pamper yourself with a soothing manicure and pedicure.</p>
                    <div className="price">400 PKR</div>
                </li>
                <li className="service-item">
                    <h3>Makeup</h3>
                    <p>Look glamorous with our professional makeup service.</p>
                    <div className="price">600 PKR</div>
                </li>
                <li className="service-item">
                    <h3>Hair Coloring</h3>
                    <p>Choose from a range of colors to refresh your look.</p>
                    <div className="price">1000 PKR</div>
                </li>
            </ul>
        </div>
    );
}

export default Services;