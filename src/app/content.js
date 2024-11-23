const content = {
    en: {
        introTitle: "Thank you for visiting my page.",
        introContent: (
            <div>
                I&#39;m a Software Engineer interested in Flutter, Web Development. <br />
                Currently working in Hiroshima, Japan.
            </div>
        ),
        skillsTitle: "Skills",
        skillsContent: (
            <div>
                <h3 className="text-2xl font-semibold mb-2">As a Developer</h3>
                <ul className="list-disc pl-5">
                    <li>Developed a feature to restrict screen operations based on call status and a log transmission function for a commercial Android application.</li>
                    <li>Created web applications like a bulletin board, Todo list, and gallery using Python and Django, and deployed them with AWS S3, EC2, and Lightsail.</li>
                    <li>Developed a Chrome extension for work assistance using JavaScript.</li>
                    <li>Common knowledge of HTML, CSS, JavaScript and Java.</li>
                    <li>Common knowledge of Android Application Development.</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-4 mb-2">As a QA Engineer</h3>
                <ul className="list-disc pl-5">
                    <li>Analyze bugs and errors found during tests.</li>
                    <li>Perform manual testing on software products.</li>
                    <li>Create and maintain detailed test plans and test cases for software products.</li>
                    <li>Review software requirements, specifications, and technical design documents, providing feedback to increase quality of product and overall user experience.</li>
                    <li>Analyzed product quality based on test results.</li>
                    <li>Conducted network testing on LAN/WAN equipment devices, including Android phones and payment devices.</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-4 mb-2">Network and System Knowledge</h3>
                <ul className="list-disc pl-5">
                    <li>Knowledgeable in OSI network model, TCP/IP, and Layer 2/3 switching and routing.</li>
                    <li>Experienced in capturing and analyzing network packets using Wireshark.</li>
                    <li>Implemented and configured wireless technologies.</li>
                    <li>Experience with Cent OS.</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-4 mb-2">Other Skills</h3>
                <ul className="list-disc pl-5">
                    <li>Developed a tool to aggregate test results using VBA for compiling and organizing test data.</li>
                    <li>Managed project progress and schedules with business partners to ensure smooth project flow.</li>
                    <li>Trained new employees as an OJT trainer.</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-4 mb-2">Language Skills</h3>
                <ul className="list-disc pl-5">
                    <li>Language skills: Korean (Native)</li>
                    <li>Japanese (Fluent, N1 full score)</li>
                    <li>English (Business, TOEIC 935)</li>
                </ul>
            </div>
        ),
        careerTitle: "Career",
        careerContent: "2023.04 ~ Current NTT DATA SBC Mobile Division",
    },
    jp: {
        introTitle: "私のページを訪問していただきありがとうございます。",
        introContent: (
            <div>
                私はFlutter,Web開発に興味があるソフトウェア エンジニアです。<br />
                現在広島で働いています。
            </div>
        ),
        skillsTitle: "スキル",
        skillsContent: (
            <div>
                <h3 className="text-2xl font-semibold mb-2">開発者として</h3>
                <ul className="list-disc pl-5">
                    <li>商業用Androidアプリケーションにおいて、通話状態に基づいて画面操作を制限する機能やログ送信機能を開発。</li>
                    <li>PythonとDjangoを使用して掲示板、ToDoリスト、ギャラリーのようなWebアプリケーションを作成し、AWS S3、EC2、Lightsailを活用してデプロイ。</li>
                    <li>業務支援用のChrome拡張機能をJavaScriptで開発。</li>
                    <li>HTML、CSS、JavaScript、Javaに関する基本的な知識を保有。</li>
                    <li>Androidアプリケーション開発に関する基本的な知識を保有。</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-4 mb-2">QAエンジニアーとして</h3>
                <ul className="list-disc pl-5">
                    <li>テスト中に発見されたバグやエラーを分析。</li>
                    <li>ソフトウェア製品の手動テストを実施。</li>
                    <li>ソフトウェア製品に関する詳細なテスト計画およびテストケースを作成し、維持。</li>
                    <li>ソフトウェア要件、仕様書、技術設計文書をレビューし、製品の品質とユーザー体験を向上させるためのフィードバックを提供。</li>
                    <li>テスト結果に基づいて製品品質を分析。</li>
                    <li>LAN/WAN機器、Androidフォン、決済デバイスを含むネットワークテストを実施。</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-4 mb-2">ネットワーク・システムの知識</h3>
                <ul className="list-disc pl-5">
                    <li>OSIネットワークモデル、TCP/IP、Layer 2/3のスイッチングおよびルーティングに関する知識を保有。</li>
                    <li>Wiresharkを使用してネットワークパケットをキャプチャおよび分析した経験。</li>
                    <li>無線技術の実装および設定の経験。</li>
                    <li>Cent OSの使用経験。</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-4 mb-2">その他のスキル</h3>
                <ul className="list-disc pl-5">
                    <li>VBAを使用してテストデータを集計するツールを開発し、テストデータをコンパイルおよび整理。</li>
                    <li>ビジネスパートナーとプロジェクトの進行状況やスケジュールを管理し、円滑なプロジェクト進行を確保。</li>
                    <li>OJTトレーナーとして新入社員の教育を担当。</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-4 mb-2">言語能力</h3>
                <ul className="list-disc pl-5">
                    <li>韓国語（ネイティブ）</li>
                    <li>日本語（流暢、JLPT N1満点）</li>
                    <li>英語（ビジネスレベル、TOEIC 935点）</li>
                </ul>
            </div>

        ),
        careerTitle: "キャリア",
        careerContent: "2023.04 ~ 現在 NTT DATA SBC Mobile Division",
    },
    ko: {
        introTitle: "제 페이지를 방문해 주셔서 감사합니다.",
        introContent: (
            <div>
                저는 Flutter, 웹 개발에 흥미가 있는 소프트웨어 엔지니어입니다. <br />
                현재 일본 히로시마에서 일하고 있습니다.
            </div>
        ),
        skillsTitle: "기술",
        skillsContent: (
            <div>
                <h3 className="text-2xl font-semibold mb-2">개발자로서</h3>
                <ul className="list-disc pl-5">
                    <li>상업용 안드로이드 애플리케이션에서 통화 상태에 따라 화면 동작을 제한하는 기능과 로그 전송 기능을 개발.</li>
                    <li>Python과 Django를 사용하여 게시판, Todo 리스트, 갤러리와 같은 웹 애플리케이션을 제작하고, 이를 AWS S3, EC2, Lightsail을 활용하여 배포.</li>
                    <li>업무 보조용 Chrome 확장 프로그램을 JavaScript로 개발.</li>
                    <li>HTML, CSS, JavaScript, Java에 대한 기본적인 지식 보유.</li>
                    <li>안드로이드 애플리케이션 개발에 대한 기본적인 지식 보유.</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-4 mb-2">QA 엔지니어로서</h3>
                <ul className="list-disc pl-5">
                    <li>테스트 중 발견된 버그와 오류를 분석.</li>
                    <li>소프트웨어 제품에 대한 수동 테스트 수행.</li>
                    <li>소프트웨어 제품에 대한 상세 테스트 계획 및 테스트 케이스 작성 및 유지.</li>
                    <li>소프트웨어 요구 사항, 명세서, 기술 설계 문서를 검토하고 제품 품질과 사용자 경험을 향상시키기 위한 피드백 제공.</li>
                    <li>테스트 결과를 기반으로 제품 품질 분석.</li>
                    <li>LAN/WAN 장비, 안드로이드 폰 및 결제 장치를 포함한 네트워크 테스트 수행.</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-4 mb-2">네트워크 및 시스템 지식</h3>
                <ul className="list-disc pl-5">
                    <li>OSI 네트워크 모델, TCP/IP, Layer 2/3 스위칭 및 라우팅에 대한 지식 보유.</li>
                    <li>Wireshark를 사용하여 네트워크 패킷을 캡처하고 분석한 경험.</li>
                    <li>무선 기술 구현 및 설정 경험.</li>
                    <li>Cent OS 사용 경험.</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-4 mb-2">기타 기술</h3>
                <ul className="list-disc pl-5">
                    <li>테스트 데이터를 집계하기 위한 도구를 VBA로 개발하여 테��트 데이터를 컴파일하고 조직화.</li>
                    <li>비즈니스 파트너와 프로젝트 진행 상황 및 일정을 관리하여 원활한 프로젝트 흐름 보장.</li>
                    <li>OJT 트레이너로서 신입 사원 교육.</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-4 mb-2">언어 능력</h3>
                <ul className="list-disc pl-5">
                    <li>한국어 (모국어)</li>
                    <li>일본어 (유창함. JLPT N1 만점)</li>
                    <li>영어 (비즈니스 수준, TOEIC 935점)</li>
                </ul>
            </div>
        ),
        careerTitle: "경력",
        careerContent: "2023.04 ~ 현재 NTT DATA SBC Mobile Division",
    },
};

export default content;