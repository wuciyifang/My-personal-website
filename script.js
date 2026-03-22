// DOM 元素
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');
const overlay = document.getElementById('overlay');
const greetingEl = document.getElementById('greeting');
const heroTitleEl = document.getElementById('heroTitle');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const modalBody = document.getElementById('modalBody');
const paintingModal = document.getElementById('paintingModal');
const closePaintingModal = document.getElementById('closePaintingModal');
const fullPaintingImage = document.getElementById('fullPaintingImage');
const fullPaintingTitle = document.getElementById('fullPaintingTitle');

// 项目详情数据
const projectDetails = {
    project1: {
        title: '主讲《绿色建筑概论》',
        content: `
            <h3>绿色建筑概论</h3>
            <p>本课程面向工程造价专业学生，系统讲解绿色建筑的基本理念、构成体系、评价标准。内容涵盖绿色建筑节地、节能、节水、节材、环保等模块，帮助学生建立“低碳、高效、可持续”的工程思维。</p>
            <p>课程采用案例教学，结合真实项目拆解绿色建筑理念与实践、成本与经济效益，培养学生从造价视角参与绿色建筑策划与评估的能力。通过本课程学习，学生不仅能掌握绿色建筑核心技术要点，更能将可持续发展理念融入造价控制全过程，为未来从事绿色建筑工程管理与咨询工作打下坚实基础。</p>
        `
    },
    project2: {
        title: '主持山东省高等学校哲学社会科学面上项目',
        content: `
            <h3>“母亲河”情感认同下乡愁景观融入黄河国家文化公园（山东段）的路径研究</h3>
            <p>项目简介</p>
            <p>本课题以探索访客和居民对“母亲河”产生情感依附的空间化凝聚为线索，聚焦黄河国家文化公园（山东段）建设中“乡愁景观”的价值重构与路径创新。研究超越传统景观保护的物象层面的“乡愁”情感，其作为文化记忆与身份认同的本质内核，如何成为一种流动的情感结构，又是怎样实现人与地方之间的情感再生产的。</p>
            <p>课题从情感地理学视角切入，探究“母亲河”如何通过景观叙事唤醒集体记忆，将抽象的“家国情怀”转化为可感知、可参与的空间实践。研究试图回答：在黄河国家文化公园这一宏大叙事框架下，乡愁景观如何从“被观看的风景”转变为“可栖居的意义场域”。最终，为黄河流域文化传承提供一种以情感认同为根基、以日常生活为载体的活化路径。</p>
        `
    },
    project3: {
        title: '主持九三学社山东省委员会参政议政常规课题',
        content: `
            <h3>关于进一步加强我省工业遗产整合利用的建议</h3>
            <p>项目简介</p>
            <p>研究认为，工业遗产的核心价值不在于建筑躯壳的物理留存，而在于它所凝结的生产关系、技术伦理与代际记忆。当前保护利用常陷入“景观化”与“标本化”的困境，割裂了遗产与当下生活的有机联结。本课题提出从空间正义视角重构利用逻辑，将工业遗产视作城市文化再生的活性节点，而非孤立的怀旧符号。通过功能叠合、记忆活化与社区嵌入，使其成为连接过去与未来的时间锚点，在延续场所精神的同时，真正融入当代城市肌理与公众生活。</p>
        `
    },
    project4: {
        title: '主持淄博市社会科学规划研究项目',
        content: `
            <h3>从工业遗存到城市文脉：淄博市“碎片化”工业遗产的叙事性设计研究</h3>
            <p>项目简介</p>
            <p>本课题直面淄博工业遗产“碎片化”分布的现实困境。探寻当工业遗存散落于城市肌理、彼此断裂且语境缺失时，如何将它们从历史的残片转化为可读的城市文脉？</p>
            <p>研究引入叙事性设计理论，将工业遗产视作城市文本中的“叙事单元”。碎片不是缺陷，而是多义性的来源——每一处废弃厂房、每一段铁轨、每一座烟囱，都承载着特定的生产记忆与空间经验。课题尝试构建一种编织式的整合路径：通过空间叙事线的串联、场景节点的重构、感知序列的组织，使分散的遗存形成连贯的“场所叙事链”。这一过程不仅是物理空间的缝合，更是对城市集体记忆的唤醒与重塑。最终，让工业遗产从孤立的物变为融入日常生活的“事”，在延续场所精神的同时，为资源型城市转型提供一种以文化为导向的再生范式。</p>
        `
    }
};

// 多语言问候语
const greetings = ['你好', 'Hello', 'Bonjour', 'Hallå'];
let greetingIndex = 0;

// 多语言标题
const titles = [
    { text: '高琨', duration: 5000 },
    { text: 'Gao Kun', duration: 2000 },
    { text: 'Gao Kun', duration: 2000 } // 法语同英文（示例）
];
let titleIndex = 0;

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initSidebar();
    initGreetingAnimation();
    initTitleAnimation();
    initSmoothScroll();
    initModal();
    initPaintingModal();
});

// 导航栏滚动效果
function initNavbar() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// 侧边菜单
function initSidebar() {
    menuToggle.addEventListener('click', () => {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeSidebar.addEventListener('click', closeSidebarFunc);
    overlay.addEventListener('click', closeSidebarFunc);

    // 侧边菜单链接点击后关闭菜单
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.addEventListener('click', closeSidebarFunc);
    });
}

function closeSidebarFunc() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// 问候语动画
function initGreetingAnimation() {
    setInterval(() => {
        greetingIndex = (greetingIndex + 1) % greetings.length;
        const greetingSpan = greetingEl.querySelector('.greeting-text');
        greetingSpan.style.opacity = 0;
        setTimeout(() => {
            greetingSpan.textContent = greetings[greetingIndex];
            greetingSpan.style.opacity = 1;
        }, 300);
    }, 2000);
}

// 标题动画
function initTitleAnimation() {
    function cycleTitle() {
        const titleSpan = heroTitleEl.querySelector('.title-text');
        titleSpan.style.opacity = 0;
        setTimeout(() => {
            titleSpan.textContent = titles[titleIndex].text;
            titleSpan.style.opacity = 1;
            setTimeout(() => {
                titleIndex = (titleIndex + 1) % titles.length;
                cycleTitle();
            }, titles[titleIndex].duration);
        }, 500);
    }
    cycleTitle();
}

// 平滑滚动
function initSmoothScroll() {
    document.querySelectorAll('[data-scroll]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 模态框
function initModal() {
    // 卡片点击打开模态框
    document.querySelectorAll('[data-modal]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.getAttribute('href').substring(1); // #project1 -> project1
            openModal(projectId);
        });
    });

    closeModal.addEventListener('click', closeModalFunc);
    overlay.addEventListener('click', closeModalFunc);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunc();
        }
    });

    // ESC 键关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModalFunc();
        }
    });
}

function openModal(projectId) {
    const project = projectDetails[projectId];
    if (!project) return;

    modalBody.innerHTML = project.content;
    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModalFunc() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// 画作全图模态框
function initPaintingModal() {
    // 查看全图按钮点击事件
    document.querySelectorAll('.view-full-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const imageSrc = this.getAttribute('data-image');
            const figcaption = this.parentElement;
            // 获取figcaption中的第一个文本节点（画作名称）
            let paintingName = '';
            for (let node of figcaption.childNodes) {
                if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                    paintingName = node.textContent.trim();
                    break;
                }
            }
            openPaintingModal(imageSrc, paintingName);
        });
    });

    closePaintingModal.addEventListener('click', closePaintingModalFunc);
    paintingModal.addEventListener('click', (e) => {
        if (e.target === paintingModal) {
            closePaintingModalFunc();
        }
    });

    // ESC 键关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && paintingModal.classList.contains('active')) {
            closePaintingModalFunc();
        }
    });
}

function openPaintingModal(imageSrc, paintingName) {
    fullPaintingImage.src = imageSrc;
    fullPaintingImage.alt = paintingName;
    fullPaintingTitle.textContent = paintingName;
    // 确保关闭其他模态框和侧边菜单
    modal.classList.remove('active');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    paintingModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePaintingModalFunc() {
    paintingModal.classList.remove('active');
    document.body.style.overflow = '';
}