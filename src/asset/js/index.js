var formInput = document.querySelector('.form-todo')
let Input = document.querySelector('.form-todo input')
var jobs = document.querySelector('.jobs')

let defaultJobs = []

const loadJob = () => {
    jobs.innerHTML = ''
    defaultJobs.forEach((value, index) => {
        jobs.innerHTML += ` <li>${value}
    <div class="option">
        <div class="remove-btn" title="Xóa job"  onclick="removeJob(this, '${index}')">
            <i class="fa-solid fa-xmark"></i>
        </div>
        <div class="update-btn" title="Sửa job" onclick = "changleJob(this, '${index}')">
            <i class="fa-solid fa-wrench"></i>
        </div>
    </div>
    </li>`
    })
    Input.focus()
    Input.value = ''
}
loadJob()

const removeJob = (element, index) => {
    defaultJobs.splice(index, 1)
    let parent1 = element.parentElement
    let parent2 = parent1.parentElement
    parent2.remove()
    loadJob()
}

const changleJob = (element, index) => {
    const newJob = prompt('Nhập dữ liệu mới: ')
    defaultJobs.splice(index,1,newJob)
    loadJob()
}

formInput.addEventListener('submit', (e) => {
    e.preventDefault()
    defaultJobs.push(Input.value)
    loadJob()
})









