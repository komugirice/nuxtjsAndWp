__NUXT_JSONP__("qiitaapplication/86", (function(a,b,c,d){return {data:[{post:{id:86,date:"2020-08-06T12:28:13",date_gmt:"2020-08-06T03:28:13",guid:{rendered:"http:\u002F\u002Fwordpressmyblog-env.eba-pyivcx8v.ap-northeast-1.elasticbeanstalk.com\u002F?p=86"},modified:"2020-08-19T10:40:21",modified_gmt:"2020-08-19T01:40:21",slug:"qiitaapplication%e3%81%ae%e6%a6%82%e8%a6%81",status:"publish",type:"post",link:"https:\u002F\u002Fwww.komugirice.com\u002Fqiitaapplication\u002F86\u002F",title:{rendered:"QiitaApplicationの概要"},content:{rendered:"\u003Cp\u003E\u003Cstrong\u003EQiitaAPIを使用したデータ取得、一覧表示するアプリを作成した。\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp class=\"mb-10\"\u003EAPIで記事を取得して一覧表示する画面と、お気に入りを一覧表示する画面で構成している。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-gallery columns-1 is-cropped\"\u003E\u003Cul class=\"blocks-gallery-grid\"\u003E\u003Cli class=\"blocks-gallery-item\"\u003E\u003Cfigure\u003E\u003Cimg loading=\"lazy\" width=\"321\" height=\"479\" src=\"https:\u002F\u002Fkomugirice-myblog.s3.ap-northeast-1.amazonaws.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002FqiitaApplicaton-mainactivity-min-e1597045980951-1.png\" alt=\"\" data-id=\"349\" data-full-url=\"https:\u002F\u002Fkomugirice-myblog.s3.ap-northeast-1.amazonaws.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002FqiitaApplicaton-mainactivity-min-e1597045980951-1.png\" data-link=\"https:\u002F\u002Fwww.komugirice.com\u002Fqiitaapplicaton-mainactivity-min\u002F\" class=\"wp-image-349\" srcset=\"https:\u002F\u002Fkomugirice-myblog.s3.ap-northeast-1.amazonaws.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002FqiitaApplicaton-mainactivity-min-e1597045980951-1.png 321w, https:\u002F\u002Fkomugirice-myblog.s3.ap-northeast-1.amazonaws.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002FqiitaApplicaton-mainactivity-min-e1597045980951-1-300x448.png 300w\" sizes=\"(max-width: 321px) 100vw, 321px\" \u002F\u003E\u003C\u002Ffigure\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Ffigure\u003E\n\n\n\n\u003Cdiv class=\"wp-block-group\"\u003E\u003Cdiv class=\"wp-block-group__inner-container\"\u003E\n\u003Ch4\u003E構成は次の通り\u003C\u002Fh4\u003E\n\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\n\n\n\u003Cdiv\u003E\n\u003Cp\u003Eヘッダー\u003Cbr\u003E　タイトル\u003Cbr\u003E　サーチアイコン\u003C\u002Fp\u003E\n\u003Cp\u003EtabLayout\u003Cbr\u003E　記事一覧、お気に入り\u003C\u002Fp\u003E\n\u003Cp\u003EviewPager\u003Cbr\u003E　ArticleFragment、FavoriteFragment\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\n\n\u003Cdiv aria-hidden=\"true\" class=\"mb60 wp-block-spacer clearfix\"\u003E\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003E\u003Cb\u003Eメイン画面はactivity_main.xml, MainActivity.ktで実装している\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n\n\n\n\u003Cp class=\"filename\"\u003Eactivity_main.xml\u003C\u002Fp\u003E\n\n\n\n\u003Cpre class=\"EnlighterJSRAW\" data-enlighter-language=\"xml\" data-enlighter-theme=\"\" data-enlighter-highlight=\"\" data-enlighter-linenumbers=\"\" data-enlighter-lineoffset=\"\" data-enlighter-title=\"layout\u002Factivity_main.xml\" data-enlighter-group=\"\"\u003E&lt;?xml version=\"1.0\" encoding=\"utf-8\"?\u003E\n&lt;layout\u003E\n&lt;androidx.constraintlayout.widget.ConstraintLayout xmlns:android=\"http:\u002F\u002Fschemas.android.com\u002Fapk\u002Fres\u002Fandroid\"\n    xmlns:app=\"http:\u002F\u002Fschemas.android.com\u002Fapk\u002Fres-auto\"\n    android:layout_width=\"match_parent\"\n    android:layout_height=\"match_parent\"\n    android:background=\"@android:color\u002Fwhite\"\u003E\n\n\n    &lt;androidx.constraintlayout.widget.ConstraintLayout\n        android:id=\"@+id\u002FheaderView\"\n        android:layout_width=\"0dp\"\n        android:layout_height=\"?attr\u002FactionBarSize\"\n        android:background=\"@color\u002FcolorQiita\"\n        android:paddingStart=\"16dp\"\n        android:paddingEnd=\"16dp\"\n        app:layout_constraintEnd_toEndOf=\"parent\"\n        app:layout_constraintStart_toStartOf=\"parent\"\n        app:layout_constraintTop_toTopOf=\"parent\"\u003E\n\n        &lt;TextView\n            android:id=\"@+id\u002FheaderTextView\"\n            android:layout_width=\"wrap_content\"\n            android:layout_height=\"wrap_content\"\n            android:layout_gravity=\"center_horizontal\"\n            android:text=\"@string\u002Ftitle_toolbar\"\n            android:textColor=\"@android:color\u002Fwhite\"\n            android:textSize=\"15sp\"\n            app:layout_constraintEnd_toEndOf=\"parent\"\n            app:layout_constraintStart_toStartOf=\"parent\"\n            app:layout_constraintTop_toTopOf=\"parent\" \u002F\u003E\n\n        &lt;ImageView\n            android:id=\"@+id\u002FsearchImageView\"\n            android:layout_width=\"24dp\"\n            android:layout_height=\"24dp\"\n            android:src=\"@drawable\u002Fic_search_white_24dp\"\n            app:layout_constraintBottom_toBottomOf=\"parent\"\n            app:layout_constraintEnd_toEndOf=\"parent\"\n            app:layout_constraintTop_toTopOf=\"parent\" \u002F\u003E\n\n        &lt;androidx.constraintlayout.widget.ConstraintLayout\n            android:id=\"@+id\u002FheaderSearchView\"\n            android:layout_width=\"0dp\"\n            android:layout_height=\"0dp\"\n            android:visibility=\"invisible\"\n            app:layout_constraintBottom_toBottomOf=\"parent\"\n            app:layout_constraintEnd_toEndOf=\"parent\"\n            app:layout_constraintStart_toStartOf=\"parent\"\n            app:layout_constraintTop_toTopOf=\"parent\"\u003E\n\n\n            &lt;ImageView\n                android:id=\"@+id\u002FdeleteImageView\"\n                android:layout_width=\"24dp\"\n                android:layout_height=\"24dp\"\n                android:src=\"@drawable\u002Fic_close_black_24dp\"\n                android:tint=\"@android:color\u002Fwhite\"\n                app:layout_constraintBottom_toBottomOf=\"parent\"\n                app:layout_constraintEnd_toEndOf=\"parent\"\n                app:layout_constraintTop_toTopOf=\"parent\" \u002F\u003E\n\n            &lt;EditText\n                android:id=\"@+id\u002FsearchEditText\"\n                android:layout_width=\"0dp\"\n                android:layout_height=\"wrap_content\"\n                android:layout_marginStart=\"8dp\"\n                android:layout_marginEnd=\"8dp\"\n                android:drawableStart=\"@drawable\u002Fic_search_white_24dp\"\n                android:drawableTint=\"#33000000\"\n                android:gravity=\"start|center\"\n                android:hint=\"@string\u002Flabel_search_title\"\n                android:imeOptions=\"actionSearch\"\n                android:inputType=\"text\"\n                android:textColor=\"@android:color\u002Fwhite\"\n                android:textColorHint=\"#33000000\"\n                app:layout_constraintBottom_toBottomOf=\"parent\"\n                app:layout_constraintEnd_toStartOf=\"@id\u002FdeleteImageView\"\n                app:layout_constraintStart_toStartOf=\"parent\"\n                app:layout_constraintTop_toTopOf=\"parent\" \u002F\u003E\n\n        &lt;\u002Fandroidx.constraintlayout.widget.ConstraintLayout\u003E\n\n    &lt;\u002Fandroidx.constraintlayout.widget.ConstraintLayout\u003E\n\n\n    &lt;com.google.android.material.tabs.TabLayout\n        android:id=\"@+id\u002FtabLayout\"\n        android:layout_width=\"0dp\"\n        android:layout_height=\"wrap_content\"\n        app:layout_constraintEnd_toEndOf=\"parent\"\n        app:layout_constraintStart_toStartOf=\"parent\"\n        app:layout_constraintTop_toBottomOf=\"@+id\u002FheaderView\"\n        app:tabTextColor=\"@android:color\u002Fwhite\"\n        app:tabBackground=\"@color\u002FcolorQiita\" \u002F\u003E\n\n\n    &lt;androidx.viewpager.widget.ViewPager\n        android:id=\"@+id\u002FviewPager\"\n        android:layout_width=\"0dp\"\n        android:layout_height=\"0dp\"\n        app:layout_constraintBottom_toBottomOf=\"parent\"\n        app:layout_constraintEnd_toEndOf=\"parent\"\n        app:layout_constraintStart_toStartOf=\"parent\"\n        app:layout_constraintTop_toBottomOf=\"@+id\u002FtabLayout\" \u002F\u003E\n\n&lt;\u002Fandroidx.constraintlayout.widget.ConstraintLayout\u003E\n&lt;\u002Flayout\u003E\u003C\u002Fpre\u003E\n\n\n\n\u003Cp\u003Eヘッダーはtoolbarを使用せず、自作している。\u003C\u002Fp\u003E\n",protected:b},excerpt:{rendered:"\u003Cp\u003EQiitaAPIを使用したデータ取得、一覧表示するアプリを作成した。 APIで記事を取得して一覧表示する画面と、お気に入りを一覧表示する画面で構成している。 ヘッダー　タイトル　サーチアイコン tabLayout　記事一 [&hellip;]\u003C\u002Fp\u003E\n",protected:b},author:c,featured_media:0,comment_status:d,ping_status:d,sticky:b,template:"",format:"standard",meta:[],categories:[7],tags:[5],_links:{self:[{href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F86"}],collection:[{href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts"}],about:[{href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Ftypes\u002Fpost"}],author:[{embeddable:a,href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Fusers\u002F1"}],replies:[{embeddable:a,href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Fcomments?post=86"}],"version-history":[{count:c,href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F86\u002Frevisions"}],"predecessor-version":[{id:499,href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F86\u002Frevisions\u002F499"}],"wp:attachment":[{href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Fmedia?parent=86"}],"wp:term":[{taxonomy:"category",embeddable:a,href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories?post=86"},{taxonomy:"post_tag",embeddable:a,href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Ftags?post=86"}],curies:[{name:"wp",href:"https:\u002F\u002Fapi.w.org\u002F{rel}",templated:a}]}}}],fetch:[],mutations:void 0}}(true,false,1,"closed")));