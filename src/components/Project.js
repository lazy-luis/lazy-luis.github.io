const Project = ({ title, desc, tags, url, imgname }) => {
  console.log(tags);
  return (
    <div className="ProjectBlock">
      <div
        className="Project"
        style={{ backgroundImage: 'url("./projects/' + imgname + '.png")' }}
      >
        <div class="project_cover">
          <h5>
            <a href={url} target="_blank">
              {title}
            </a>
          </h5>
          <p> {desc} </p>
          <div class="project_tags">
            {tags.map((tag) => (
              <label> {tag} </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
