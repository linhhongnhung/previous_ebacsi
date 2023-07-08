import React from "react"


export function Footer() {
    return (
        <footer id="footer" className="bg-[#005baa] text-white mt-12 w-full">


            <div>
                <div className="w-full flex mx-96 pb-28">
                    <div className="flex flex-row">
                        <div className="col-lg-4 pt-16 max-w-md mr-16">
                            <img src="./imgs/Website---eBacsi---final---cut_82.png" />
                            <br>
                            </br>
                            <h4 className="mt-16 font-bold mb-4">TỔNG CÔNG TY TRUYỀN THÔNG (VNPT-MEDIA)</h4>
                            <span className="text-sm leading-8">GIẤY CHỨNG NHẬN ĐĂNG KÝ DOANH NGHIỆP SỐ: 0106873188 DO SỞ KH&ĐT HÀ NỘI CẤP NGÀY 12/06/2015
                            </span>
                        </div>

                        <div className="flex flex-col pt-36">
                            <div className="row flex flex-row">
                                <div className="mr-9"> <a href="gioi-thieu.html"  >GIỚI THIỆU </a></div>
                                <div className="mx-9"><a href="cac-goi-dich-vu.html" >CÁC GÓI DỊCH VỤ Y TẾ</a></div>
                                <div className="mx-9">TIN TỨC</div>
                                <div className="ml-9">ĐĂNG KÝ NHẬN TƯ VẤN</div>


                            </div>
                            <div className="flex flex-row mt-20 justify-between">
                                <div className="">
                                    <h4 className="font-bold">ĐIỀU KHOẢN VÀ CHÍNH SÁCH BẢO MẬT</h4>
                                    <ul>
                                        <li className="my-2"><i className=""></i> <a href="dieu-khoan-hoat-dong.html text-sm">Điều khoản hoạt động</a></li>
                                        <li className="my-2"><i className=""></i> <a href="thanh-toan.html text-sm">Quy định thanh toán</a></li>
                                        <li className="my-2"><i className=""></i> <a href="chinh-sach-bao-mat-thong-tin.html text-sm">Chính sách bảo mật thông tin</a></li>


                                    </ul>
                                    <img className="mt-7" src="./imgs/dathongbao.png" />
                                </div>
                                <div className="">
                                    <h4 className="font-bold">KẾT NỐI VỚI CHÚNG TÔI</h4>
                                    <div className="icon-footer flex flex-row">
                                        <a href="https://www.facebook.com/VNPT-eBacsi-104448552242601">
                                            <img src="./imgs/Website---eBacsi---final---cut_86.png" className="mx-2 mt-5" /> 
                                        </a> 
                                        <a href="https://www.instagram.com">
                                            <img className="mx-2 mt-5" src="./imgs/Website---eBacsi---final---cut_88.png" />
                                        </a> 
                                        <a href="https://www.youtube.com">
                                            <img className="mx-2 mt-5" src="./imgs/Website---eBacsi---final---cut_90.png" />
                                        </a> 
                                    </div>
                                    <img className="mt-14" src="./imgs/Website---eBacsi---final---cut_96.png" />
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>


        </footer>

    )
}
