__NUXT_JSONP__("qiitaapplication/163", (function(a,b,c,d){return {data:[{post:{id:163,date:"2020-08-09T09:09:15",date_gmt:"2020-08-09T00:09:15",guid:{rendered:"http:\u002F\u002Fwordpressmyblog-env.eba-pyivcx8v.ap-northeast-1.elasticbeanstalk.com\u002F?p=163"},modified:"2020-08-19T10:40:21",modified_gmt:"2020-08-19T01:40:21",slug:"recyclerview%e3%81%aecell",status:"publish",type:"post",link:"https:\u002F\u002Fwww.komugirice.com\u002Fqiitaapplication\u002F163\u002F",title:{rendered:"RecyclerViewのcell"},content:{rendered:"\n\u003Cfigure class=\"wp-block-gallery columns-1 is-cropped\"\u003E\u003Cul class=\"blocks-gallery-grid\"\u003E\u003Cli class=\"blocks-gallery-item\"\u003E\u003Cfigure\u003E\u003Cimg loading=\"lazy\" width=\"321\" height=\"479\" src=\"https:\u002F\u002Fkomugirice-myblog.s3.ap-northeast-1.amazonaws.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002FqiitaApplicaton-mainactivity-min-e1597045980951-1.png\" alt=\"\" data-id=\"349\" data-full-url=\"https:\u002F\u002Fkomugirice-myblog.s3.ap-northeast-1.amazonaws.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002FqiitaApplicaton-mainactivity-min-e1597045980951-1.png\" data-link=\"https:\u002F\u002Fwww.komugirice.com\u002Fqiitaapplicaton-mainactivity-min\u002F\" class=\"wp-image-349\" srcset=\"https:\u002F\u002Fkomugirice-myblog.s3.ap-northeast-1.amazonaws.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002FqiitaApplicaton-mainactivity-min-e1597045980951-1.png 321w, https:\u002F\u002Fkomugirice-myblog.s3.ap-northeast-1.amazonaws.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002FqiitaApplicaton-mainactivity-min-e1597045980951-1-300x448.png 300w\" sizes=\"(max-width: 321px) 100vw, 321px\" \u002F\u003E\u003C\u002Ffigure\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Ffigure\u003E\n\n\n\n\u003Cdiv class=\"mb20 clearfix\"\u003E\u003C\u002Fdiv\u003E\n\u003Cb\u003E[構成]\u003C\u002Fb\u003E\u003C\u002Fbr\u003E\nプロフィール画像\u003C\u002Fbr\u003E\nユーザ名\u003C\u002Fbr\u003E\n投稿日\u003C\u002Fbr\u003E\nタイトル\u003C\u002Fbr\u003E\nタグ\u003C\u002Fbr\u003E\nいいね数\u003C\u002Fbr\u003E\nコメント数\n\n\n\n\u003Cdiv class=\"mb20 clearfix\"\u003E\u003C\u002Fdiv\u003E\n\u003Cp class=\"filename\"\u003EArticleRow\u003C\u002Fp\u003E\n\n\n\n\u003Cpre class=\"EnlighterJSRAW\" data-enlighter-language=\"kotlin\" data-enlighter-theme=\"\" data-enlighter-highlight=\"\" data-enlighter-linenumbers=\"\" data-enlighter-lineoffset=\"12\" data-enlighter-title=\"\" data-enlighter-group=\"\"\u003Eopen class ArticleRow (\n    @PrimaryKey open var id : String = \"\",\n    @Required open var url : String = \"\",\n    @Required open var title : String = \"\",\n    var profileImageUrl : String = \"\",\n    var userName : String = \"\",\n    var createdAt : String = \"\",\n    var likesCount : String = \"\",\n    var commentCount : String = \"\",\n    var tags : String = \"\",\n    var updDate : String = \"\",\n    var delFlg : String = \"0\"\n\n) : RealmObject()\u003C\u002Fpre\u003E\n\n\n\n\u003Cdiv class=\"mb20 clearfix\"\u003E\u003C\u002Fdiv\u003E\n\u003Cp class=\"filename\"\u003Erow.xml\u003C\u002Fp\u003E\n\n\n\n\u003Cp\u003EArticleRowをrow.xmlにDataBindingする\u003C\u002Fp\u003E\n\n\n\n\u003Cpre class=\"EnlighterJSRAW\" data-enlighter-language=\"generic\" data-enlighter-theme=\"\" data-enlighter-highlight=\"\" data-enlighter-linenumbers=\"false\" data-enlighter-lineoffset=\"\" data-enlighter-title=\"\" data-enlighter-group=\"\"\u003E&lt;?xml version=\"1.0\" encoding=\"utf-8\"?\u003E\n&lt;layout\u003E\n\n    &lt;data\u003E\n        &lt;variable\n            name=\"articleRow\"\n            type=\"com.komugirice.qiitaapplication.dataclass.ArticleRow\" \u002F\u003E\n        &lt;variable\n            name=\"bindUserInfo\"\n            type=\"String\" \u002F\u003E\n    &lt;\u002Fdata\u003E\n&lt;androidx.constraintlayout.widget.ConstraintLayout xmlns:android=\"http:\u002F\u002Fschemas.android.com\u002Fapk\u002Fres\u002Fandroid\"\n    xmlns:app=\"http:\u002F\u002Fschemas.android.com\u002Fapk\u002Fres-auto\"\n    xmlns:tools=\"http:\u002F\u002Fschemas.android.com\u002Ftools\"\n    android:id=\"@+id\u002FConstraintLayout\"\n    android:layout_width=\"match_parent\"\n    android:layout_height=\"wrap_content\"\n    android:orientation=\"horizontal\"\u003E\n\n・・・\n    &lt;ImageView\n        android:id=\"@+id\u002FprofileImage\"\n        app:imageUrl=\"@{articleRow.profileImageUrl}\"\n・・・\n        &lt;TextView\n            android:id=\"@+id\u002FuserInfo\"\n            android:text=\"@{bindUserInfo}\"\n・・・\n        &lt;TextView\n            android:id=\"@+id\u002FarticleTitle\"\n            android:text=\"@{articleRow.title}\"\n・・・\n        &lt;TextView\n            android:id=\"@+id\u002FlikesCount\"\n            android:text=\"@{articleRow.likesCount}\"\n・・・\n        &lt;TextView\n            android:id=\"@+id\u002FcommentCount\"\n            android:text=\"@{articleRow.commentCount}\"\n・・・\n        &lt;TextView\n            android:id=\"@+id\u002FupdDate\"\n            android:text=\"@{articleRow.updDate}\"\n・・・\n\n&lt;\u002Fandroidx.constraintlayout.widget.ConstraintLayout\u003E\n&lt;\u002Flayout\u003E\n\u003C\u002Fpre\u003E\n\n\n\n\u003Cdiv class=\"mb20 clearfix\"\u003E\u003C\u002Fdiv\u003E\n\u003Cp class=\"filename\"\u003EArticleAdapter\u003C\u002Fp\u003E\n\n\n\n\u003Cpre class=\"EnlighterJSRAW\" data-enlighter-language=\"kotlin\" data-enlighter-theme=\"\" data-enlighter-highlight=\"\" data-enlighter-linenumbers=\"\" data-enlighter-lineoffset=\"230\" data-enlighter-title=\"\" data-enlighter-group=\"\"\u003Eclass RowViewHolder(val binding: RowBinding): RecyclerView.ViewHolder(binding.root)\u003C\u002Fpre\u003E\n\n\n\n\u003Cp\u003Erow.xmlをDataBinding化している\u003C\u002Fp\u003E\n\n\n\n\u003Cdiv style=\"height:33px\" aria-hidden=\"true\" class=\"wp-block-spacer\"\u003E\u003C\u002Fdiv\u003E\n\n\n\n\u003Cpre class=\"EnlighterJSRAW\" data-enlighter-language=\"kotlin\" data-enlighter-theme=\"\" data-enlighter-highlight=\"\" data-enlighter-linenumbers=\"\" data-enlighter-lineoffset=\"115\" data-enlighter-title=\"\" data-enlighter-group=\"\"\u003E    \u002F**\n     * itemsが取得成功のViewHolder\n     *\n     * @param holder\n     * @param position\n     *\u002F\n    private fun onBindViewHolder(holder: RowViewHolder, position: Int) {\n        val data = items[position]\n\n        \u002F\u002F プロフィール画像\n        \u002F\u002F タイトル\n        \u002F\u002F いいね数\n        \u002F\u002F コメント数\n        \u002F\u002F 登録日（お気に入り画面で使用）\n        \u002F\u002Fholder.binding.bindProfileImage = Picasso.get().load(data.row.profileImageUrl).get() → utilに移行\n        holder.binding.articleRow = data.row\n\n        \u002F\u002F ユーザ名 + \" が\" + 登録日 + \" に投稿しました\"\n        var userInfo = if(data.row.userName.isEmpty()) \"Non-Name\" else data.row.userName.trim()\n        userInfo += context?.getString( R.string.label_user_name ) + data.row.createdAt + context?.getString( R.string.label_created_at )\n        holder.binding.bindUserInfo = userInfo\n\n        \u002F\u002F タググループ 5個まで\n        var tagList: MutableList&lt;Tag\u003E = mutableListOf()\n        val tagStrList = data.row.tags.split(\",\").withIndex().map { if(it.index &lt;= 4) it.value else \"\" }.filterNot { it.isEmpty() }\n        tagStrList.forEach {\n            \u002F\u002F 色：黒、テキストサイズ：10、背景画像：ic_label_gray_24dp\n            val tag: Tag = Tag(it)\n            tag.tagTextColor = Color.BLACK\n            tag.tagTextSize = 10.0f\n            tag.background = context?.getDrawable(R.drawable.ic_label_gray_24dp)\n            tagList.add(tag)\n        }\n        holder.binding.tagGroup.addTags(tagList)\n\n        \u002F\u002F 登録日の表示切り替え\n        holder.binding.updDateLabel.toggle(data.isFavorite)\n        holder.binding.updDate.toggle(data.isFavorite)\n        \u002F\u002Fholder.rootView.setBackgroundColor(ContextCompat.getColor(context, if (position % 2 == 0) R.color.light_blue else R.color.light_yellow))\n    }\u003C\u002Fpre\u003E\n",protected:b},excerpt:{rendered:"\u003Cp\u003E[構成] プロフィール画像 ユーザ名 投稿日 タイトル タグ いいね数 コメント数 ArticleRow row.xml ArticleRowをrow.xmlにDataBindingする ArticleAdapter r [&hellip;]\u003C\u002Fp\u003E\n",protected:b},author:c,featured_media:0,comment_status:d,ping_status:d,sticky:b,template:"",format:"standard",meta:[],categories:[7],tags:[10],_links:{self:[{href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F163"}],collection:[{href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts"}],about:[{href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Ftypes\u002Fpost"}],author:[{embeddable:a,href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Fusers\u002F1"}],replies:[{embeddable:a,href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Fcomments?post=163"}],"version-history":[{count:c,href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F163\u002Frevisions"}],"predecessor-version":[{id:500,href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F163\u002Frevisions\u002F500"}],"wp:attachment":[{href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Fmedia?parent=163"}],"wp:term":[{taxonomy:"category",embeddable:a,href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories?post=163"},{taxonomy:"post_tag",embeddable:a,href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Ftags?post=163"}],curies:[{name:"wp",href:"https:\u002F\u002Fapi.w.org\u002F{rel}",templated:a}]}}}],fetch:[],mutations:void 0}}(true,false,1,"closed")));