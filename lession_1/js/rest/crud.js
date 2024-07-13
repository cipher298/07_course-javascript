var courseApi = "http://localhost:3000/courses";

/*
 ***************** API Handler *****************
 */

// Get List Courses
function getCourses(callback) {
  fetch(courseApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

// Post A Course
function createNewCourse(data, callback) {
  var option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(courseApi, option)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

// Delete A Course
function handleDeleteCourse(id) {
  var option = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(courseApi + "/" + id, option)
    .then(function (response) {
      return response.json();
    })
    .then(function () {
      var courseElement = document.querySelector("#course-item-" + id);
      if (courseElement) {
        courseElement.remove();
      }
    });
}

// Update A Course
function handleUpdateCourse(id, data, callback) {
  var option = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(courseApi + "/" + id, option)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

/*
 ***************** Fill Courses Value To Field *****************
 */
function handleEditCourse(id) {
  var courseItem = document.querySelector("#course-item-" + id);
  var name = courseItem.querySelector('h4').innerHTML
  var description = courseItem.querySelector('p').innerHTML

  document.querySelector('input[name="name"]').value = name;
  document.querySelector('input[name="description"]').value = description;

  document.querySelector("#create").style.display = "none";
  document.querySelector("#update").style.display = "inline";
  document.querySelector("#cancel").style.display = "inline";
  document.querySelector("#update").setAttribute("data-id", id);
}

/*
 ***************** Render Courses HTML *****************
 */
function renderCourses(courses) {
  var listCourses = document.querySelector("#list-courses");
  var htmls = courses.map(function (course) {
    return `
        <li id="course-item-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick="handleDeleteCourse('${course.id}')">Delete</button>
            <button onclick="handleEditCourse('${course.id}')">Change</button></li>
        `;
  });
  listCourses.innerHTML = htmls.join("");
}

/*
 ***************** Create New Courses *****************
 */
function createForm() {
  var createBtn = document.querySelector("#create");
  var updateBtn = document.querySelector("#update");
  var cancelBtn = document.querySelector("#cancel");
  updateBtn.style.display = "none";
  cancelBtn.style.display = "none";

  // Handle Button Create
  createBtn.onclick = function () {
    var nameInput = document.querySelector('input[name = "name"]').value;
    console.log(nameInput);
    var descriptionInput = document.querySelector(
      'input[name = "description"]'
    ).value;
    var formData = {
      name: nameInput,
      description: descriptionInput,
    };

    createNewCourse(formData, function () {
      getCourses(renderCourses);
    });
  };

  // Handle Button Update
  updateBtn.onclick = function () {
    var name = document.querySelector('input[name="name"]').value;
    var description = document.querySelector('input[name="description"]').value;
    var idCourse = document.querySelector("#update").getAttribute("data-id");

    var formData = {
      name: name,
      description: description,
    };

    handleUpdateCourse(idCourse, formData, function () {
      getCourses(renderCoursesCourses);
      updateBtn.style.display = "none";
      cancelBtn.style.display = "none";
      createBtn.style.display = "inline";
    });
  };

  // Handle Button Cancel
  cancelBtn.onclick = function () {
    updateBtn.style.display = "none";
    cancelBtn.style.display = "none";
    createBtn.style.display = "inline";

    document.querySelector('input[name="name"]').value = "";
    document.querySelector('input[name="description"]').value = "";
  };
}

/*
 ***************** Start *****************
 */
function start() {
  getCourses(renderCourses);
  createForm();
}

start();
