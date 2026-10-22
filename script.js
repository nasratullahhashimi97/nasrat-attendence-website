
const $ = id => document.getElementById(id);

const translations = {
    en: {
        menu:"MAIN MENU", dashboard:"Dashboard", students:"Students", attendance:"Attendance", settings:"Settings",
        needHelp:"Need help?", helpText:"Manage your students easily with StudentPro.", contactUs:"Contact us",
        workspace:"Workspace", overview:"YOUR SCHOOL AT A GLANCE", welcome:"Welcome to StudentPro 👋",
        welcomeText:"Manage your students and track attendance in one place.", addStudent:"Add Student",
        totalStudents:"Total Students", presentToday:"Present Today", absentToday:"Absent Today", notMarked:"Not Marked",
        registered:"Registered students", attending:"Students attending", notPresent:"Students not present", awaiting:"Awaiting attendance",
        attendanceAnalytics:"Attendance Analytics", attendanceOverview:"Today's attendance overview", live:"LIVE",
        attendanceRate:"Attendance rate", present:"Present", absent:"Absent", quickActions:"Quick Actions",
        quickText:"Get things done faster", addNewStudent:"Add a new student", addStudentDesc:"Register a student profile",
        markAttendance:"Mark attendance", markDesc:"Record today's attendance", preferences:"Preferences",
        preferencesDesc:"Language and appearance", recentStudents:"Recent Students", recentText:"Your latest registered students",
        viewAll:"View all", student:"STUDENT", studentId:"STUDENT ID", attendanceStatus:"ATTENDANCE",
        noStudents:"No students yet", emptyText:"Add your first student to get started.",
        schoolRecords:"SCHOOL RECORDS", studentDirectory:"Student Directory",
        directoryText:"Add, search and manage student profiles.", newStudent:"Add New Student",
        formSubtitle:"Enter the student's details below.", studentPhoto:"Student photo", photoHelp:"Optional · JPG or PNG",
        fullName:"Full Name *", email:"Email (optional)", phone:"Phone (optional)", classGroup:"Class / Group",
        cancel:"Cancel", saveStudent:"Save Student", allStudents:"All Students", searchStudents:"⌕  Search students...",
        dailyRecords:"DAILY RECORDS", attendanceManagement:"Attendance Management",
        attendancePageText:"Mark each student's attendance for today.", markAll:"✓ Mark All Present",
        dailyAttendance:"Daily Attendance", attendanceEmptyText:"Add students before marking attendance.",
        personalize:"PERSONALIZE", settingsText:"Customize your StudentPro workspace.",
        language:"Language", languageText:"Choose your preferred display language.", displayLanguage:"Display language",
        appearance:"Appearance", appearanceText:"Choose a comfortable viewing theme.", darkMode:"Dark mode",
        toggleTheme:"Toggle theme", dataManagement:"Data Management",
        dataText:"Export your student records or clear this browser's saved data.",
        exportData:"↓ Export students (CSV)", clearData:"Clear all students",
        localNote:"Your records are saved in this browser on this device. Export a backup regularly.",
        aboutSystem:"STUDENT MANAGEMENT SYSTEM",
        aboutText:"A simple workspace for student records and daily attendance.",
        footerText:"Built for better student management.",
        classLabel:"Class", edit:"Edit", delete:"Delete", emailLabel:"Email", phoneLabel:"Phone",
        noResults:"No matching students found.", saved:"Student saved successfully.",
        updated:"Student updated successfully.", deleted:"Student deleted.",
        duplicate:"This student ID already exists.", invalidPhoto:"Please choose an image smaller than 1.5 MB.",
        confirmDelete:"Delete this student?", confirmClear:"Delete ALL students? This cannot be undone.",
        cleared:"All students have been deleted.", exported:"Student data exported.",
        markedAll:"All students marked present.", noRecords:"No students to export.",
        chooseImage:"Choose an image file.", errorSave:"Unable to save. Browser storage may be full.",
        attendanceSaved:"Attendance updated.", presentButton:"Present", absentButton:"Absent",
        unmarkedButton:"Not marked", studentsWord:"students", studentWord:"student",
        allFields:"Please enter the student's name and ID.", themeLight:"☀", themeDark:"☾"
    },
    ps: {
        menu:"اصلي مېنو", dashboard:"ډشبورډ", students:"زده‌کوونکي", attendance:"حاضري", settings:"تنظیمات",
        needHelp:"مرستې ته اړتیا لرئ؟", helpText:"د StudentPro له لارې خپل زده‌کوونکي په اسانه اداره کړئ.",
        contactUs:"اړیکه ونیسئ", workspace:"کاري برخه", overview:"ستاسو د ښوونځي لنډه کتنه",
        welcome:"StudentPro ته ښه راغلاست 👋", welcomeText:"زده‌کوونکي او حاضري په یوه ځای کې اداره کړئ.",
        addStudent:"زده‌کوونکی اضافه کړئ", totalStudents:"ټول زده‌کوونکي", presentToday:"نن حاضر",
        absentToday:"نن غیرحاضر", notMarked:"لا نه دي نښه شوي", registered:"ثبت شوي زده‌کوونکي",
        attending:"حاضر زده‌کوونکي", notPresent:"غیرحاضر زده‌کوونکي", awaiting:"د حاضرۍ نښه کولو ته منتظر",
        attendanceAnalytics:"د حاضرۍ تحلیل", attendanceOverview:"د نن ورځې د حاضرۍ کتنه", live:"ژوندی",
        attendanceRate:"د حاضرۍ سلنه", present:"حاضر", absent:"غایب", quickActions:"چټک کارونه",
        quickText:"کارونه په چټکۍ ترسره کړئ", addNewStudent:"نوی زده‌کوونکی اضافه کړئ",
        addStudentDesc:"د زده‌کوونکي پروفایل ثبت کړئ", markAttendance:"حاضري ثبت کړئ",
        markDesc:"د نن ورځې حاضري ثبت کړئ", preferences:"غوره تنظیمات",
        preferencesDesc:"ژبه او بڼه", recentStudents:"وروستي زده‌کوونکي",
        recentText:"ستاسو وروستي ثبت شوي زده‌کوونکي", viewAll:"ټول وګورئ", student:"زده‌کوونکی",
        studentId:"د زده‌کوونکي پېژندشمېره", attendanceStatus:"حاضري",
        noStudents:"تر اوسه زده‌کوونکي نشته", emptyText:"د پیل لپاره خپل لومړی زده‌کوونکی اضافه کړئ.",
        schoolRecords:"د ښوونځي اسناد", studentDirectory:"د زده‌کوونکو لېست",
        directoryText:"د زده‌کوونکو پروفایلونه اضافه، ولټوئ او اداره کړئ.",
        newStudent:"نوی زده‌کوونکی اضافه کړئ", formSubtitle:"لاندې د زده‌کوونکي معلومات ولیکئ.",
        studentPhoto:"د زده‌کوونکي عکس", photoHelp:"اختیاري · JPG یا PNG", fullName:"بشپړ نوم *",
        email:"برېښنالیک (اختیاري)", phone:"د تلیفون شمېره (اختیاري)", classGroup:"ټولګی / ډله",
        cancel:"لغوه", saveStudent:"زده‌کوونکی ثبت کړئ", allStudents:"ټول زده‌کوونکي",
        searchStudents:"⌕  زده‌کوونکي ولټوئ...", dailyRecords:"ورځني اسناد",
        attendanceManagement:"د حاضرۍ مدیریت", attendancePageText:"د هر زده‌کوونکي د نن ورځې حاضري ثبت کړئ.",
        markAll:"✓ ټول حاضر کړئ", dailyAttendance:"ورځنۍ حاضري",
        attendanceEmptyText:"د حاضرۍ ثبتولو لپاره زده‌کوونکي اضافه کړئ.",
        personalize:"شخصي تنظیمات", settingsText:"د StudentPro کاري چاپېریال تنظیم کړئ.",
        language:"ژبه", languageText:"خپله خوښه ژبه وټاکئ.", displayLanguage:"د ښودلو ژبه",
        appearance:"بڼه", appearanceText:"د خپلې خوښې بڼه وټاکئ.", darkMode:"تیاره بڼه",
        toggleTheme:"بڼه بدله کړئ", dataManagement:"د معلوماتو مدیریت",
        dataText:"معلومات صادر کړئ یا له دې براوزر څخه یې پاک کړئ.",
        exportData:"↓ معلومات CSV ته صادر کړئ", clearData:"ټول زده‌کوونکي پاک کړئ",
        localNote:"معلومات په همدې وسیله او براوزر کې ساتل کېږي. وخت په وخت یې بیک‌اپ واخلئ.",
        aboutSystem:"د زده‌کوونکو د مدیریت سیسټم",
        aboutText:"د زده‌کوونکو د معلوماتو او ورځنۍ حاضرۍ لپاره ساده کاري چاپېریال.",
        footerText:"د زده‌کوونکو د ښه مدیریت لپاره جوړ شوی.",
        classLabel:"ټولګی", edit:"سمول", delete:"حذف", emailLabel:"برېښنالیک", phoneLabel:"تلیفون",
        noResults:"مناسب زده‌کوونکی ونه موندل شو.", saved:"زده‌کوونکی په بریالیتوب ثبت شو.",
        updated:"د زده‌کوونکي معلومات نوي شول.", deleted:"زده‌کوونکی حذف شو.",
        duplicate:"دا پېژندشمېره مخکې کارول شوې ده.", invalidPhoto:"مهرباني وکړئ تر ۱.۵ MB کوچنی عکس وټاکئ.",
        confirmDelete:"دا زده‌کوونکی حذف کړئ؟", confirmClear:"ټول زده‌کوونکي حذف شي؟ دا کار بېرته نه شي راګرځېدلی.",
        cleared:"ټول زده‌کوونکي حذف شول.", exported:"معلومات صادر شول.",
        markedAll:"ټول زده‌کوونکي حاضر شول.", noRecords:"د صادرولو لپاره معلومات نشته.",
        chooseImage:"د عکس فایل وټاکئ.", errorSave:"معلومات نه شي ساتل کېدای؛ کېدای شي حافظه ډکه وي.",
        attendanceSaved:"حاضري بدله شوه.", presentButton:"حاضر", absentButton:"غایب",
        unmarkedButton:"نه دی نښه شوی", studentsWord:"زده‌کوونکي", studentWord:"زده‌کوونکی",
        allFields:"د زده‌کوونکي نوم او پېژندشمېره ولیکئ.", themeLight:"☀", themeDark:"☾"
    },
    fa: {
        menu:"منوی اصلی", dashboard:"داشبورد", students:"شاگردان", attendance:"حاضری", settings:"تنظیمات",
        needHelp:"به کمک نیاز دارید؟", helpText:"شاگردان خود را با StudentPro به‌آسانی مدیریت کنید.",
        contactUs:"تماس با ما", workspace:"محیط کاری", overview:"نگاهی به وضعیت مکتب شما",
        welcome:"به StudentPro خوش آمدید 👋", welcomeText:"شاگردان و حاضری را در یک مکان مدیریت کنید.",
        addStudent:"افزودن شاگرد", totalStudents:"مجموع شاگردان", presentToday:"حاضر امروز",
        absentToday:"غایب امروز", notMarked:"ثبت‌نشده", registered:"شاگردان ثبت‌شده",
        attending:"شاگردان حاضر", notPresent:"شاگردان غیرحاضر", awaiting:"در انتظار ثبت حاضری",
        attendanceAnalytics:"تحلیل حاضری", attendanceOverview:"نمای کلی حاضری امروز", live:"زنده",
        attendanceRate:"درصد حاضری", present:"حاضر", absent:"غایب", quickActions:"کارهای سریع",
        quickText:"کارها را سریع‌تر انجام دهید", addNewStudent:"افزودن شاگرد جدید",
        addStudentDesc:"ثبت پروفایل شاگرد", markAttendance:"ثبت حاضری",
        markDesc:"ثبت حاضری امروز", preferences:"تنظیمات دلخواه",
        preferencesDesc:"زبان و ظاهر", recentStudents:"شاگردان اخیر",
        recentText:"آخرین شاگردان ثبت‌شده شما", viewAll:"مشاهده همه", student:"شاگرد",
        studentId:"شناسه شاگرد", attendanceStatus:"حاضری",
        noStudents:"هنوز شاگردی وجود ندارد", emptyText:"برای شروع، نخستین شاگرد خود را اضافه کنید.",
        schoolRecords:"اسناد مکتب", studentDirectory:"فهرست شاگردان",
        directoryText:"پروفایل شاگردان را اضافه، جستجو و مدیریت کنید.",
        newStudent:"افزودن شاگرد جدید", formSubtitle:"مشخصات شاگرد را در زیر وارد کنید.",
        studentPhoto:"عکس شاگرد", photoHelp:"اختیاری · JPG یا PNG", fullName:"نام کامل *",
        email:"ایمیل (اختیاری)", phone:"شماره تماس (اختیاری)", classGroup:"صنف / گروه",
        cancel:"لغو", saveStudent:"ذخیره شاگرد", allStudents:"همه شاگردان",
        searchStudents:"⌕  جستجوی شاگردان...", dailyRecords:"اسناد روزانه",
        attendanceManagement:"مدیریت حاضری", attendancePageText:"حاضری امروز هر شاگرد را ثبت کنید.",
        markAll:"✓ ثبت حاضری همه", dailyAttendance:"حاضری روزانه",
        attendanceEmptyText:"قبل از ثبت حاضری، شاگردان را اضافه کنید.",
        personalize:"شخصی‌سازی", settingsText:"محیط کاری StudentPro را تنظیم کنید.",
        language:"زبان", languageText:"زبان مورد نظر خود را انتخاب کنید.", displayLanguage:"زبان نمایش",
        appearance:"ظاهر", appearanceText:"ظاهر دلخواه خود را انتخاب کنید.", darkMode:"حالت تاریک",
        toggleTheme:"تغییر ظاهر", dataManagement:"مدیریت معلومات",
        dataText:"معلومات شاگردان را صادر کنید یا معلومات ذخیره‌شده این مرورگر را پاک کنید.",
        exportData:"↓ صدور شاگردان (CSV)", clearData:"حذف همه شاگردان",
        localNote:"معلومات در همین مرورگر و دستگاه ذخیره می‌شود. مرتب نسخه پشتیبان بگیرید.",
        aboutSystem:"سیستم مدیریت شاگردان",
        aboutText:"محیط کاری ساده برای معلومات شاگردان و حاضری روزانه.",
        footerText:"برای مدیریت بهتر شاگردان ساخته شده است.",
        classLabel:"صنف", edit:"ویرایش", delete:"حذف", emailLabel:"ایمیل", phoneLabel:"تلفن",
        noResults:"شاگردی مطابق جستجو پیدا نشد.", saved:"شاگرد با موفقیت ذخیره شد.",
        updated:"معلومات شاگرد به‌روز شد.", deleted:"شاگرد حذف شد.",
        duplicate:"این شناسه شاگرد قبلاً استفاده شده است.", invalidPhoto:"لطفاً عکسی کوچک‌تر از ۱.۵ مگابایت انتخاب کنید.",
        confirmDelete:"این شاگرد حذف شود؟", confirmClear:"تمام شاگردان حذف شوند؟ این کار برگشت‌پذیر نیست.",
        cleared:"تمام شاگردان حذف شدند.", exported:"معلومات صادر شد.",
        markedAll:"حاضری همه شاگردان ثبت شد.", noRecords:"معلوماتی برای صدور وجود ندارد.",
        chooseImage:"یک فایل تصویری انتخاب کنید.", errorSave:"ذخیره ممکن نیست؛ شاید حافظه مرورگر پُر شده باشد.",
        attendanceSaved:"حاضری به‌روز شد.", presentButton:"حاضر", absentButton:"غایب",
        unmarkedButton:"ثبت‌نشده", studentsWord:"شاگرد", studentWord:"شاگرد",
        allFields:"نام و شناسه شاگرد را وارد کنید.", themeLight:"☀", themeDark:"☾"
    }
};

let students = [];
let language = "en";
let darkMode = false;
let pendingPhoto = "";
let toastTimer;

function t(key) {
    return translations[language]?.[key] || translations.en[key] || key;
}

function loadData() {
    try {
        const saved = JSON.parse(localStorage.getItem("studentProRecords") || "[]");
        students = Array.isArray(saved) ? saved : [];
    } catch {
        students = [];
    }
    language = localStorage.getItem("studentProLanguage") || "en";
    if (!translations[language]) language = "en";
    darkMode = localStorage.getItem("studentProDark") === "true";
}

function saveData() {
    try {
        localStorage.setItem("studentProRecords", JSON.stringify(students));
        return true;
    } catch (error) {
        showToast(t("errorSave"));
        return false;
    }
}

function showToast(message) {
    const toast = $("toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

function escapeHTML(value = "") {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[char]);
}

function initials(name = "") {
    return name.trim().split(/\s+/).slice(0, 2).map(part => part[0] || "").join("").toUpperCase() || "?";
}

function avatarHTML(student, extraClass = "") {
    const image = student.photo
        ? `<img src="${student.photo}" alt="${escapeHTML(student.name)}">`
        : escapeHTML(initials(student.name));
    return `<span class="student-avatar ${extraClass}">${image}</span>`;
}

function statusKey(status) {
    if (status === "Present") return "present";
    if (status === "Absent") return "absent";
    return "unmarked";
}

function statusHTML(status) {
    const key = statusKey(status);
    const css = status === "Present" ? "status-present" :
        status === "Absent" ? "status-absent" : "status-unmarked";
    return `<span class="status ${css}">${escapeHTML(t(key))}</span>`;
}

function getCounts() {
    const present = students.filter(s => s.attendance === "Present").length;
    const absent = students.filter(s => s.attendance === "Absent").length;
    const unmarked = students.length - present - absent;
    const marked = present + absent;
    return {
        present, absent, unmarked,
        percentage: marked ? Math.round(present / marked * 100) : 0
    };
}

function updateCounts() {
    const c = getCounts();
    $("totalCount").textContent = students.length;
    $("presentCount").textContent = c.present;
    $("absentCount").textContent = c.absent;
    $("unmarkedCount").textContent = c.unmarked;

    $("attendancePercentage").textContent = c.percentage + "%";
    $("donutPercentage").textContent = c.percentage + "%";

    const total = Math.max(students.length, 1);
    $("presentBar").style.width = (c.present / total * 100) + "%";
    $("absentBar").style.width = (c.absent / total * 100) + "%";
    $("unmarkedBar").style.width = (c.unmarked / total * 100) + "%";

    $("presentChartCount").textContent = c.present;
    $("absentChartCount").textContent = c.absent;
    $("unmarkedChartCount").textContent = c.unmarked;

    const presentAngle = students.length ? c.present / students.length * 100 : 0;
    const absentAngle = students.length ? c.absent / students.length * 100 : 0;
    $("donutChart").style.background =
        `conic-gradient(#19b981 0% ${presentAngle}%, #e45e70 ${presentAngle}% ${presentAngle + absentAngle}%, #9676e9 ${presentAngle + absentAngle}% 100%)`;
}

function renderRecent() {
    const recent = [...students].slice(-5).reverse();
    $("recentEmpty").classList.toggle("hidden", recent.length > 0);
    $("recentStudentsBody").innerHTML = recent.map(s => `
        <tr>
            <td><div class="student-cell">
                ${avatarHTML(s)}
                <span><strong>${escapeHTML(s.name)}</strong><small>${escapeHTML(s.email || s.phone || t("student"))}</small></span>
            </div></td>
            <td>${escapeHTML(s.id)}</td>
            <td>${statusHTML(s.attendance)}</td>
        </tr>`).join("");
}

function renderStudents() {
    const query = $("studentSearch").value.trim().toLowerCase();
    const filtered = students.filter(s =>
        [s.name, s.id, s.email, s.phone, s.className]
            .some(value => String(value || "").toLowerCase().includes(query))
    );

    $("directoryCount").textContent = `${filtered.length} ${filtered.length === 1 ? t("studentWord") : t("studentsWord")}`;
    $("studentsEmpty").classList.toggle("hidden", filtered.length > 0);

    $("studentGrid").innerHTML = filtered.map(s => `
        <article class="student-card">
            <div class="student-card-top">
                ${avatarHTML(s)}
                <div class="card-menu">
                    <button class="small-action" data-edit="${escapeHTML(s.id)}" title="${escapeHTML(t("edit"))}" aria-label="${escapeHTML(t("edit"))}">✎</button>
                    <button class="small-action delete" data-delete="${escapeHTML(s.id)}" title="${escapeHTML(t("delete"))}" aria-label="${escapeHTML(t("delete"))}">×</button>
                </div>
            </div>
            <h3>${escapeHTML(s.name)}</h3>
            <div class="student-id">${escapeHTML(s.id)}</div>
            <div class="student-card-meta">
                <span>✉ ${escapeHTML(s.email || "—")}</span>
                <span>☎ ${escapeHTML(s.phone || "—")}</span>
                <span>▦ ${escapeHTML(s.className || "—")}</span>
            </div>
            <div class="student-card-bottom">${statusHTML(s.attendance)}</div>
        </article>`).join("");
}

function renderAttendance() {
    const query = $("attendanceSearch").value.trim().toLowerCase();
    const filtered = students.filter(s =>
        `${s.name} ${s.id} ${s.className || ""}`.toLowerCase().includes(query)
    );

    $("attendanceDate").textContent = new Intl.DateTimeFormat(
        language === "ps" ? "ps-AF" : language === "fa" ? "fa-AF" : "en-US",
        { dateStyle: "long" }
    ).format(new Date());

    $("attendanceEmpty").classList.toggle("hidden", filtered.length > 0);

    $("attendanceList").innerHTML = filtered.map(s => `
        <div class="attendance-item">
            ${avatarHTML(s)}
            <div class="attendance-person">
                <strong>${escapeHTML(s.name)}</strong>
                <small>${escapeHTML(s.id)}${s.className ? " · " + escapeHTML(s.className) : ""}</small>
            </div>
            <div class="attendance-controls">
                <button class="attendance-button ${s.attendance === "Present" ? "selected present" : ""}"
                    data-attendance="Present" data-id="${escapeHTML(s.id)}">${escapeHTML(t("presentButton"))}</button>
                <button class="attendance-button ${s.attendance === "Absent" ? "selected absent" : ""}"
                    data-attendance="Absent" data-id="${escapeHTML(s.id)}">${escapeHTML(t("absentButton"))}</button>
                <button class="attendance-button ${s.attendance !== "Present" && s.attendance !== "Absent" ? "selected unmarked" : ""}"
                    data-attendance="Not Marked" data-id="${escapeHTML(s.id)}">${escapeHTML(t("unmarkedButton"))}</button>
            </div>
        </div>`).join("");
}

function renderAll() {
    updateCounts();
    renderRecent();
    renderStudents();
    renderAttendance();
}

function showPage(page) {
    document.querySelectorAll(".page-section").forEach(section => section.classList.add("hidden"));
    const target = $(page + "Page");
    if (target) target.classList.remove("hidden");

    document.querySelectorAll(".nav-link").forEach(button => {
        button.classList.toggle("active", button.dataset.page === page);
    });

    const titleKeys = {
        dashboard: "dashboard",
        students: "students",
        attendance: "attendance",
        settings: "settings"
    };
    $("pageTitle").textContent = t(titleKeys[page] || "dashboard");
    $("sidebar").classList.remove("open");
}

function applyLanguage() {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "en" ? "ltr" : "rtl";
    $("languageSelect").value = language;
    $("settingsLanguage").value = language;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        if (translations[language][key]) element.textContent = translations[language][key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        element.placeholder = t(element.dataset.i18nPlaceholder);
    });

    $("themeToggle").textContent = darkMode ? "☀" : "☾";
    $("settingsThemeToggle").textContent = darkMode ? t("themeLight") : t("themeDark");

    const currentPage = document.querySelector(".nav-link.active")?.dataset.page || "dashboard";
    showPage(currentPage);
    renderAll();
}

function applyTheme() {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("studentProDark", String(darkMode));
    $("themeToggle").textContent = darkMode ? "☀" : "☾";
    $("settingsThemeToggle").textContent = darkMode ? t("themeLight") : t("themeDark");
}

function openStudentForm(student = null) {
    $("studentForm").reset();
    pendingPhoto = "";
    $("editStudentId").value = student ? student.id : "";
    $("studentIdInput").disabled = false;
    $("studentIdInput").value = student ? student.id : "";
    $("studentName").value = student ? student.name : "";
    $("studentEmail").value = student ? student.email || "" : "";
    $("studentPhone").value = student ? student.phone || "" : "";
    $("studentClass").value = student ? student.className || "" : "";
    pendingPhoto = student ? student.photo || "" : "";
    updatePhotoPreview(pendingPhoto);
    $("formTitle").textContent = t(student ? "edit" : "newStudent");
    $("saveStudentButton").textContent = t("saveStudent");
    $("studentFormPanel").classList.remove("hidden");
    $("studentName").focus();
    $("studentFormPanel").scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeStudentForm() {
    $("studentFormPanel").classList.add("hidden");
    $("studentForm").reset();
    $("studentIdInput").disabled = false;
    pendingPhoto = "";
    updatePhotoPreview("");
}

function updatePhotoPreview(photo) {
    $("photoPreview").innerHTML = photo
        ? `<img src="${photo}" alt="Student photo preview">`
        : "♙";
}

function compressImage(file) {
    return new Promise((resolve, reject) => {
        if (!file.type.startsWith("image/")) {
            reject(new Error("image"));
            return;
        }

        if (file.size > 1.5 * 1024 * 1024) {
            reject(new Error("size"));
            return;
        }

        const reader = new FileReader();
        reader.onerror = () => reject(new Error("read"));
        reader.onload = () => {
            const image = new Image();
            image.onerror = () => reject(new Error("image"));
            image.onload = () => {
                const maxSide = 320;
                const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
                const canvas = document.createElement("canvas");
                canvas.width = Math.max(1, Math.round(image.width * scale));
                canvas.height = Math.max(1, Math.round(image.height * scale));
                const ctx = canvas.getContext("2d");
                ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL("image/jpeg", 0.72));
            };
            image.src = reader.result;
        };
        reader.readAsDataURL(file);
    });
}

async function handlePhotoChange(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        pendingPhoto = await compressImage(file);
        updatePhotoPreview(pendingPhoto);
    } catch {
        event.target.value = "";
        showToast(t(file.size > 1.5 * 1024 * 1024 ? "invalidPhoto" : "chooseImage"));
    }
}

function handleStudentSubmit(event) {
    event.preventDefault();

    const name = $("studentName").value.trim();
    const id = $("studentIdInput").value.trim();
    const email = $("studentEmail").value.trim();
    const phone = $("studentPhone").value.trim();
    const className = $("studentClass").value.trim();
    const editingId = $("editStudentId").value;

    if (!name || !id) {
        showToast(t("allFields"));
        return;
    }

    const duplicate = students.some(s =>
        s.id.toLowerCase() === id.toLowerCase() && s.id !== editingId
    );
    if (duplicate) {
        showToast(t("duplicate"));
        return;
    }

    const previous = students.find(s => s.id === editingId);
    const record = {
        id, name, email, phone, className,
        photo: pendingPhoto || "",
        attendance: previous ? previous.attendance : "Not Marked"
    };

    if (editingId) {
        const index = students.findIndex(s => s.id === editingId);
        if (index !== -1) students[index] = record;
    } else {
        students.push(record);
    }

    if (!saveData()) {
        if (previous) {
            const index = students.findIndex(s => s.id === id);
            if (index !== -1) students[index] = previous;
        } else {
            students = students.filter(s => s.id !== id);
        }
        renderAll();
        return;
    }

    closeStudentForm();
    renderAll();
    showToast(t(editingId ? "updated" : "saved"));
}

function deleteStudent(id) {
    if (!confirm(t("confirmDelete"))) return;
    const oldStudents = students;
    students = students.filter(s => s.id !== id);
    if (!saveData()) {
        students = oldStudents;
        return;
    }
    renderAll();
    showToast(t("deleted"));
}

function setAttendance(id, status) {
    const student = students.find(s => s.id === id);
    if (!student) return;

    const previous = student.attendance;
    student.attendance = status;
    if (!saveData()) {
        student.attendance = previous;
        return;
    }
    renderAll();
    showToast(t("attendanceSaved"));
}

function exportCSV() {
    if (!students.length) {
        showToast(t("noRecords"));
        return;
    }

    const headers = ["Student ID", "Name", "Email", "Phone", "Class", "Attendance"];
    const rows = students.map(s => [
        s.id, s.name, s.email || "", s.phone || "", s.className || "", s.attendance
    ]);

    const escapeCSV = value => `"${String(value).replace(/"/g, '""')}"`;
    const csv = "\uFEFF" + [headers, ...rows].map(row => row.map(escapeCSV).join(",")).join("\r\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "studentpro-records.csv";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showToast(t("exported"));
}

function clearAllStudents() {
    if (!confirm(t("confirmClear"))) return;
    const oldStudents = students;
    students = [];
    if (!saveData()) {
        students = oldStudents;
        return;
    }
    renderAll();
    showToast(t("cleared"));
}

function changeLanguage(value) {
    language = translations[value] ? value : "en";
    localStorage.setItem("studentProLanguage", language);
    applyLanguage();
}

document.querySelectorAll(".nav-link").forEach(button => {
    button.addEventListener("click", () => showPage(button.dataset.page));
});

document.querySelectorAll("[data-go]").forEach(button => {
    button.addEventListener("click", () => showPage(button.dataset.go));
});

$("mobileMenu").addEventListener("click", () => $("sidebar").classList.toggle("open"));
$("openStudentForm").addEventListener("click", () => openStudentForm());
$("closeStudentForm").addEventListener("click", closeStudentForm);
$("cancelStudentForm").addEventListener("click", closeStudentForm);
$("studentForm").addEventListener("submit", handleStudentSubmit);
$("studentPhoto").addEventListener("change", handlePhotoChange);
$("studentSearch").addEventListener("input", renderStudents);
$("attendanceSearch").addEventListener("input", renderAttendance);

$("studentGrid").addEventListener("click", event => {
    const editButton = event.target.closest("[data-edit]");
    const deleteButton = event.target.closest("[data-delete]");
    if (editButton) {
        const student = students.find(s => s.id === editButton.dataset.edit);
        if (student) openStudentForm(student);
    }
    if (deleteButton) deleteStudent(deleteButton.dataset.delete);
});

$("attendanceList").addEventListener("click", event => {
    const button = event.target.closest("[data-attendance]");
    if (button) setAttendance(button.dataset.id, button.dataset.attendance);
});

$("markAllPresent").addEventListener("click", () => {
    const oldStudents = students.map(s => ({ ...s }));
    students.forEach(s => s.attendance = "Present");
    if (!saveData()) {
        students = oldStudents;
        return;
    }
    renderAll();
    showToast(t("markedAll"));
});

$("languageSelect").addEventListener("change", event => changeLanguage(event.target.value));
$("settingsLanguage").addEventListener("change", event => changeLanguage(event.target.value));

function toggleTheme() {
    darkMode = !darkMode;
    applyTheme();
}
$("themeToggle").addEventListener("click", toggleTheme);
$("settingsThemeToggle").addEventListener("click", toggleTheme);
$("exportData").addEventListener("click", exportCSV);
$("clearData").addEventListener("click", clearAllStudents);

loadData();
applyTheme();
applyLanguage();
showPage("dashboard");

document.addEventListener("DOMContentLoaded", function () {
    // Update the copyright year automatically
    const yearElement = document.getElementById("copyrightYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Add a small hover effect to developer links
    const developerLinks = document.querySelectorAll(
        ".developer-footer a"
    );

    developerLinks.forEach(function (link) {
        link.setAttribute("rel", "noopener noreferrer");
    });
});
