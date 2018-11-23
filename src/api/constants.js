const ErrorNo = {
    Success:0,//正常
    InvalidUser:1,//用户名非法
    InvalidPass:2,//密码非法
    UserExists:3,//用户已经存在
    RegFail:4,//注册失败

    UserNotExists:10,//用户不存在
    WrongPass:11,

    InvalidTitle:20,
    InvalidType:21,
    InvalidCountry:22,
    InvalidLevel:23,
    InvalidImgs:24,
    InvalidContent:25,

    InvalidOpt:30,
    UpdateFail:31,

    InvalidInfo:40,

    LoginFirst:1000
};

const RoleType = {
    Teacher:1,
    Admin:2,
    Student:3
};

const CourseStatus = {
    Normal:0,
    unNormal:1
};

const UploadType = {
    Avatar:1,
    IdCard:2,
    Voice:3
};

const TeacherStatus = {
    Normal:0,//正常
    Pending:1,//隐藏
    InfoUndone:2//信息未填写状态
};

const CourseOperate = {
    on:1,
    off:2
};
export  {ErrorNo,RoleType,TeacherStatus,UploadType,CourseStatus,CourseOperate};
