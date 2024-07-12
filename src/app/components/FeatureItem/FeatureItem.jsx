function FeatureItem({ data }) {
  const { img, alt, title, text } = data;

  return (
    <div className="feature-item">
      <img src={img} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default FeatureItem;
